const Sequelize = require('sequelize')
const Op = Sequelize.Op

const uuid = require('node-uuid')

let config = {}

if (process.env.NODE_ENV !== 'production') {
  config = require('../config/dbConfigDev')
} else {
  config = require('../config/dbConfigPrd')
}

// console.log('init sequelize...');

function generateId () {
  return uuid.v4()
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  }
})

const ID_TYPE = Sequelize.STRING(50)

function defineModel (name, attributes) {
  var attrs = {}
  for (let key in attributes) {
    let value = attributes[key]
    if (typeof value === 'object' && value['type']) {
      // value.allowNull = value.allowNull || false
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value
        // allowNull: true
      }
    }
  }
  attrs.id = {
    type: ID_TYPE,
    primaryKey: true
  }
  attrs.createdAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.updatedAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now()
        if (obj.isNewRecord) {
          if (!obj.id) {
            obj.id = generateId()
          }
          obj.createdAt = now
          obj.updatedAt = now
          obj.version = 0
        } else {
          obj.updatedAt = Date.now()
          obj.version++
        }
      }
    }
  })
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATE', 'DATEONLY', 'BOOLEAN', 'BLOB']

var exp = {
  defineModel: defineModel,
  sync: () => {
    // only allow create ddl in non-production environment:
    if (process.env.NODE_ENV !== 'production') {
      sequelize.sync({ force: true })
    } else {
      throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.')
    }
  }
}

for (let type of TYPES) {
  exp[type] = Sequelize[type]
}

exp.ID = ID_TYPE
exp.generateId = generateId

module.exports = exp
