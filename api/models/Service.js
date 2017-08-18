/**
 * Service.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mongo',
  schema: true,
  attributes: {
    brand: {
      type: 'string',
      enum: ['avon', 'oriflame', 'gratis'], // add brands here.
      required: 'Please enter the brand of the catalog.'
    },
    source_url: {
      type: 'string',
      required: 'Please enter the url of the source.'
    }
  }
};

