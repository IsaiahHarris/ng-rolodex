const bookshelf = require('./bookshelf');

class Contacts extends bookshelf.Model{
  get tableName(){
    return 'contacts'
  }
  get hasTimestamps(){
    return true;
  }
  created(){
    return this.belongsTo('User', 'id', 'created_by')
  }
}

module.exports = bookshelf.model('Contacts', Contacts)