import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  details: DS.attr(),
  upCount: DS.attr(),
  downCount: DS.attr(),
  entry: DS.belongsTo('entry', {async: true})
});
