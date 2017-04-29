import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveAnswer(params){
      this.sendAction('saveAnswer', params);
    },
    handleError(){
      this.sendAction('handleError');
    }
  }
});
