import { Template } from 'meteor/templating';
 
import { EIT } from '../api/eit.js';

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
   
      // Insert a new eit into the collection
      EIT.insert({
        Firstname,
        Lastname,
        Gender,
        Dateofbirth,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.Firstname.value = '';
      target.Lastname.value = '';
      target.Gender.value = '';
      target.Dateofbirth.value = '';
    },
  });