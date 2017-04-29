import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions');
  this.route('ask');
  this.route('question', {path: '/questions/:question_id'});
  this.route('answers', {path: '/questions/:question_id/answers'});
});

export default Router;
