import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm:false,
  actions:{
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        details: this.get('details'),
        tags: this.get('tags')
      };
      console.log(params);
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
