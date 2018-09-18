import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor'; 
import { EIT } from '../api/eits.js';

import './eit.js';
import './body.html';
 
Template.body.helpers({
    eit() {
    // Show newest tasks at the top
    return EIT.find({}, { sort: { Firstname: +1 } });      
      },
});
 
Template.body.events({
    'submit .new-eit'(event) {
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const Firstname = target.Firstname.value;
      const Lastname = target.Lastname.value;
      const Gender = target.Gender.value;
      const Dateofbirth = target.Dateofbirth.value;
      const eitid = target.eitid.value;

      // Insert and Update an eit into the collection
      Meteor.call('eit.insert', Firstname, Lastname, Gender, Dateofbirth, eitid);      

      // Clear form
      target.Firstname.value = '';
      target.Lastname.value = '';
      target.Gender.value = '';
      target.Dateofbirth.value = '';
      target.eitid.value = '';
      target.submit.value = 'ADD A NEW EIT';
    },
  });