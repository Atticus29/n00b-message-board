import Ember from 'ember';

export default Ember.Component.extend({
  displayAnswerForm: false,
  actions: {
    displayAnswerForm(){
      this.set('displayAnswerForm', true);
    },
    saveAnswer(){
      this.set('displayAnswerForm', false);
      // console.log(this);
      var params = {
        author: this.get('author'),
        details: this.get('details'),
        upCount: 0,
        downCount: 0,
        entry: this.get('question')
      };
      console.log(params);
      this.sendAction('saveAnswer', params)
    }
  }
});
