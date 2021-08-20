const { response } = require('express');
const Alert = require('../models/Alert');
const Device = require('../models/Device');



const getAlerts = async(req, res = response) => {

    try {

        const alerts = await Alert.findAll();
        
        return res.status(200).json({
            ok: true,
            msg: 'alerts',
            alerts
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }

}

const postAlert = async(req, res = response) => {

    const value = parseInt(req.body.value);
    const { uuid } = req.body;

    try {

        const dev = await Device.findAll({
            where: {
                uuid: uuid
            }
        });

        console.log(dev[0].alerts_config);

        if( value < dev[0].alerts_config.range.max && value > dev[0].alerts_config.range.min) {
            return res.status(200).json({
                ok: true,
                msg: 'Value not unexpected'
            });
        }
        
        if(value > dev[0].alerts_config.range.max || value < dev[0].alerts_config.range.min) {
            await Alert.create({
                uuid: `alert_${uuid}_${value}`,
                deviceUuid: uuid,
                registered_value: value,
                alert_data: {
                    name: `alert_${uuid}`,
                    alert_type: "Out of range",
                    value: value,
                    range: {
                        min: dev[0].alerts_config.range.min,
                        max: dev[0].alerts_config.range.max
                    }
                }
            }).then( alert => {
                return res.status(200).json({
                ok: true,
                msg: 'Generated alert:',
                alert
                });

            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }

}

const deleteAlert = async(req, res = response) => {

    const uuid = req.params.id;

    try {

        await Alert.destroy({
            where: {
                uuid: uuid
            }
        });
    
        res.json({
            ok: true,
            msg: `Deleted alert uuid: ${ uuid }`
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }

}

module.exports = {
    getAlerts,
    postAlert,
    deleteAlert
}