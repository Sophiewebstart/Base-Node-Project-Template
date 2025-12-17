const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Unable to create an airplane';
    ErrorResponse.error = new AppError ([ 'Model Number in the incoming request is not in the correct form'], StatusCodes.BAD_REQUEST);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ErrorResponse});
  }
   next();
}


module.exports = {
  validateCreateRequest
};