import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  columns: [
    { text: 'First name' },
    { text: 'Last name' },
    { text: 'Gender' },
    { text: 'Date of birth' },     
  ],
});