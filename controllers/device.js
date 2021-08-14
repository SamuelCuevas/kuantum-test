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

module.exports = {
    getDevices,
    postDevice
}