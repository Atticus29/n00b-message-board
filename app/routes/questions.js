import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      entries: this.store.findAll('entry'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.entry;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(()=>{
        return question.save();
      });
      this.transitionTo('questions');
    }
  }
});
