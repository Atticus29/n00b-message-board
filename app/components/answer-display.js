import Ember from 'ember';

export default Ember.Component.extend({
  displayAnswers: false,
  actions: {
    displayAnswers(){
      this.set('displayAnswers', true);
    },
    handleError(){
      this.sendAction('handleError');
    },
    updateAnswer(answer,params){
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
