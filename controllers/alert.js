const { response } = require('express');
const Alert = require('../models/Alert');



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

const getAlertById = async(req, res = response) => {

    const uuid = req.params.id;

    console.log(uuid);
    // try {
        
    //     const alert = await Alert.findAll({
    //         where: {
    //             uuid: uuid
    //         }
    //     });
    //     return res.status(200).json({
    //         ok: true,
    //         alert
    //     })

    // } catch (error) {
    //     console.log(error);
    // res.status(500).json({
    //     ok: false
    // });
    // }
} 

const postAlert = async(req, res = response) => {

    if( req.body === null) {
        return res.status(500).json({
            ok: false
        });
    }

    try {
        
        await Alert.create( req.body )
        .then( alert => {
            return res.status(200).json({
                ok: true,
                msg: 'Created alert:',
                alert
            });
        }).catch(err => {
            console.log(err);
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }


}

const updateAlert = async(req, res = response) => {

    const uuid = req.params.id;
    
    try {
        
        await Alert.update({
            ...req.body
        }, {
            where: {
                uuid: uuid
            }
        });

        res.json({
            ok: true,
            msg: `Updated alert uuid: ${ uuid }`
        })

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
    getAlertById,
    postAlert,
    updateAlert,
    deleteAlert
}