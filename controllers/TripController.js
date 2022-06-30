/**
 * The TripController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TripService');
const createtrip = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtrip);
};

const deletetrip = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetrip);
};

const getAlltrip = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltrip);
};

const gettrip = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettrip);
};

const updatetrip = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetrip);
};


module.exports = {
  createtrip,
  deletetrip,
  getAlltrip,
  gettrip,
  updatetrip,
};
