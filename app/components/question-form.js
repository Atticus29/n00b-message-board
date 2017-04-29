import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      if(this.get('title') && this.get('author') && this.get('details') && this.get('tags')){
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          details: this.get('details'),
          tags: this.get('tags'),
          upCount: 0,
          downCount: 0
        };
        this.sendAction('save', params);
      } else{
        this.sendAction('handleError');
      }
    },

  }
});
