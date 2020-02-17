const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.ownerId'
});
const setQueryRestriction = setField({
  from: 'params.user._id',
  as: 'params.query.ownerId'
});
const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query.ownerId'
});

module.exports = {
  before: {
    all: [authenticate('jwt')
    ],
    find: [
      setQueryRestriction
    ],
    get: [
      setQueryRestriction
    ],
    create: [
      setUserId
    ],
    update: [
      limitToUser
    ],
    patch: [
      limitToUser
    ],
    remove: [
      limitToUser
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
