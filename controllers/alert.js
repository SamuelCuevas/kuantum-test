const { response } = require('express');


const getAlerts = async(req, res = response) => {

    // const eventos = await Evento.find()
    //                                 .populate('user', 'name');

    return res.status(200).json({
        ok: true,
        msg: 'alerts'
    });
}

module.exports = {
    getAlerts
}