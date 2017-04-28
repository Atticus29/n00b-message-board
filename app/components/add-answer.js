import Ember from 'ember';

export default Ember.Component.extend({
  displayAnswerForm: false,
  actions: {
    displayAnswerForm(){
      this.set('displayAnswerForm', true);
    },
    saveAnswer(){
      this.set('displayAnswerForm', false);
      var params = {
        author: this.get('author'),
        details: this.get('details'),
        upCount: 0,
        downCount: 0
      };
      this.sendAction('saveAnswer', params)
    }
  }
});
