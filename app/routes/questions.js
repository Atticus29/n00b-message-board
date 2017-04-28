import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('entry');
  },
  actions: {
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('questions');
    }
  }
});
