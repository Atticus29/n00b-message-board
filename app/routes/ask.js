import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params){
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('questions'); // or nothing?
    }
  }
});
