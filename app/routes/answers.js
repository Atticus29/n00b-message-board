import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(this);
    return this.store.findAll('entry', params.question_id);
  }
});
