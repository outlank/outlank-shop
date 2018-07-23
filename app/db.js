const Sequelize = require('sequelize')
const Op = Sequelize.Op

const uuid = require('node-uuid')

const config = require('../config/dbConfig')

// console.log('init sequelize...');

function generateId() {
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

function defineModel(name, attributes) {
  var attrs = {}
  for (let key in attributes) {
    let value = attributes[key]
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }

  // console.log('model defined for table: ' + name + '\n' + JSON.stringify(attrs, function (k, v) {
  //     if (k === 'type') {
  //         for (let key in Sequelize) {
  //             if (key === 'ABSTRACT' || key === 'NUMBER') {
  //                 continue;
  //             }
  //             let dbType = Sequelize[key];
  //             if (typeof dbType === 'function') {
  //                 if (v instanceof dbType) {
  //                     if (v._length) {
  //                         return `${dbType.key}(${v._length})`;
  //                     }
  //                     return dbType.key;
  //                 }
  //                 if (v === dbType) {
  //                     return dbType.key;
  //                 }
  //             }
  //         }
  //     }
  //     return v;
  // }, '  '));
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false
  })
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATE', 'DATEONLY', 'BOOLEAN']

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
