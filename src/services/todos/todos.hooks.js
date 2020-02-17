const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') 
    ],
    find: [
      setField({
        from: 'params.user._id',
        as: 'params.query.ownerId'
      })
    ],
    get: [
      setField({
        from: 'params.user._id',
        as: 'params.query.ownerId'
      }),
    ],
    create: [
      setField({
        from: 'params.user._id',
        as: 'data.ownerId'
      })
    ],
    update: [
      setField({
        from: 'params.user._id',
        as: 'params.query.ownerId'
      })
    ],
    patch: [
      setField({
        from: 'params.user._id',
        as: 'params.query.ownerId'
      })
    ],
    remove: [
      setField({
        from: 'params.user._id',
        as: 'params.query.ownerId'
      })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
