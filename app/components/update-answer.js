import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions:{
    updateAnswerForm(){
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer){
      if(this.get('author') && this.get('details')){
        var params = {
          author: this.get('author'),
          details: this.get('details')
        }
        this.set('updateAnswerForm', false);
        this.sendAction('updateAnswer', answer, params);
      } else{
        console.log("got to the error");
        this.sendAction('handleError');
      }
    }
  }
});
