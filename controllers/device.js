const { response } = require('express');
const Device = require('../models/Device');


const getDevices = async(req, res = response) => {

    try {
        
        const dev = await Device.findAll();

        return res.status(200).json({
            ok: true,
            msg: 'devices',
            "devices": dev
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }
}

const getDeviceById = async(req, res = response) => {

    const uuid = req.params.id;

    console.log(uuid);

    try {
        
        const dev = await Device.findAll({
            where: {
                uuid: uuid
            }
        });
        return res.status(200).json({
            ok: true,
            dev
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        });
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
                msg: `Created device uuid: ${ req.body.uuid }`,
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
        res.status(500).json({
            ok: false,
            error
        });
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
        console.log(error);
        res.status(500).json({
            ok: false
        });
    }

}

module.exports = {
    getDevices,
    getDeviceById,
    postDevice,
    updateDevice,
    deleteDevice
}