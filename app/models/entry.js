import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  details: DS.attr(),
  tags: DS.attr(),
  upCount: DS.attr(),
  downCount: DS.attr(),
  // answers: DS.hasMany('answer', {async: true}),
  // tips: DS.hasMany('tip', { async: true })
});
