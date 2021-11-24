/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const Reporte = require('../../database/models/reporte.model');

const createReporte = async (req, res, next) => {
  const {
    nivelArroyo, nivelBasura, nivelTrafico, longitud, latitud, descripcion,
  } = { ...req.body };
  try {
    await Reporte.create({
      nivelArroyo,
      nivelBasura,
      nivelTrafico,
      longitud,
      latitud,
      descripcion
    }).then((reporte) => res.status(200).json({ data: { reporte } }))
      .catch((e) => res.status(400).json({ e }));
  } catch (e) {
    next(e);
  }
};

const getReporte = async (req, res, next) => {
  try {
    const reporte = await Reporte.findOne({
      where: { id: req.params.id },
    });
    if (!reporte) return res.status(400).json({ Error: 'Reporte not found' });
    return res.status(200).json({ reporte });
  } catch (e) {
    next(e);
  }
};

const getAllReportes = async (req, res, next) => {
  try {
    const reporte = await Reporte.findAll();
    if (!reporte) return res.status(400).json({ Error: 'Reporte empty' });
    return res.status(200).json({ reporte });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createReporte,
  getReporte,
  getAllReportes,
};
