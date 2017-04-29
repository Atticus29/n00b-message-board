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
    }
  }
});
