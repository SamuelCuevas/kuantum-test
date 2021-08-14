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
                msg: 'devices',
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

    const {uuid} = req.body;
    

    try {
        
        const device = await Device.findAll({
            where: {
                "uuid": uuid
            }
        });

        if(!device) {
            return res.status(404).json({
                ok: false,
                msg: 'Device not found'
            });
        }

        const newDevice = {
            ...req.body
        }

        // const deviceUpdated = await Device.

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getDevices,
    postDevice,
    updateDevice
}