const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const registerInstance = new Ajv({allErrors : true});
const AjvErrors = require('ajv-errors');
addFormats(registerInstance);
AjvErrors(registerInstance);

const registerSchema = {
  // type: 'object',
  // "$schema": "http://json-schema.org/draft-07/schema#",
  // "$id": "http://example.com/example.json",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30,
      "errorMessage" : "Username must be between 1 and 30 characters long"
    },
    "password": {
      "type": "string",
      "minLength":5,
      "maxLength": 20,
      "errorMessage" : "Password must be between 5 and 20 characters long"
    },
    "firstName": {
      "type": "string",
      "minLength": 2,
      "maxLength": 30,
      "errorMessage" : "First name must be between 1 and 30 characters long"
    },
    "lastName": {
      "type": "string",
      "minLength": 2,
      "maxLength": 30,
      "errorMessage" : "Last name must be between 1 and 30 characters long"
    },
    "email": {
      "type": "string",
      "minLength": 3,
      "maxLength": 60,
      "format": "email",
      "errorMessage" : "Please enter a valid email address"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "firstName",
    "lastName",
    "password",
    "email"
  ]
}
// Example usage
const userData = {
  username: "e",
  password: "example",
  firstName: "a",
  lastName: "a",
  email: "john.doe@example.com"
};


const validate = registerInstance.compile(registerSchema);

const valid = validate(userData);
if (!valid) {
  console.log(validate.errors);
}

module.exports = validate