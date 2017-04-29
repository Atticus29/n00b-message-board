import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params){
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('questions'); // or nothing?
    },
    handleError(){
      console.log("Got here");
      $("#form-section").hide();
      $("#main-error").show();
      $('html, body').animate({
       scrollTop: $("#main-error").offset().top
   }, 2000);
      setInterval(()=>{location.reload(true);}, 2000);
    }
  }
});
