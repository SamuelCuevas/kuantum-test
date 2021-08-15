const { response } = require('express');
const Device = require('../models/Device');


const getDevices = async(req, res = response) => {

    try {
        
        const dev = await Device.findAll();

        return res.status(200).json({
            ok: true,
            msg: 'devices',
            dev
        });

    } catch (error) {
        console.log(error);
    }
}


const postDevice = async(req, res = response) => {

    if( req.body === null) {
        return res.status(500).json({
            ok: false
        });
    }

    try {
        
        await Device.create( req.body )
        .then( dev => {
            return res.status(200).json({
                ok: true,
                msg: 'Created device:',
                dev
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

const updateDevice = async(req, res = response) => {

    const uuid = req.params.id;
    
    try {
        
        await Device.update({
            ...req.body
        }, {
            where: {
                uuid: uuid
            }
        });

        res.json({
            ok: true,
            msg: `Updated device uuid: ${ uuid }`
        })

    } catch (error) {
        console.log(error);
    }

}

const deleteDevice = async(req, res = response) => {

    const uuid = req.params.id;

    try {

        await Device.destroy({
            where: {
                uuid: uuid
            }
        });
    
        res.json({
            ok: true,
            msg: `Deleted device uuid: ${ uuid }`
        });

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getDevices,
    postDevice,
    updateDevice,
    deleteDevice
}