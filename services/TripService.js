/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Trip } = require('../models/Trip');

/**
* Creates the data
*
* trip Trip data to be created
* returns trip
* */
const createtrip = ({ trip }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Trip(trip).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* tripId String the Id parameter
* no response value expected for this operation
* */
const deletetrip = ({ tripId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trip.findOneAndDelete({ _id:tripId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltrip = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Trip.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* tripId String the Id parameter
* returns trip
* */
const gettrip = ({ tripId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trip.findById(tripId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* tripId String the Id parameter
* trip Trip data to be updated (optional)
* returns trip
* */
const updatetrip = ({ tripId, trip }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Trip.findOneAndUpdate({ _id:tripId },trip).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtrip,
  deletetrip,
  getAlltrip,
  gettrip,
  updatetrip,
};
