import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('entry', params.question_id);
  },
  actions:{
    updateQuestion(model, params){
      Object.keys(params).forEach(key=>{
        if(params[key] !== undefined){
          model.set(key, params[key]);
        }
      });
      model.save();
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.entry;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(()=>{
        return question.save();
      });
      this.transitionTo('questions');
    },
    updateAnswer(answer, params){
      console.log(answer);
      console.log(params);
      Object.keys(params).forEach(key=>{
        if(params[key] !== undefined){
          answer.set(key,params[key]);
        }
      });
      answer.save();
      location.reload(true);
    }
  }
});
