import { Template } from 'meteor/templating';
 
import { EIT } from '../api/eit.js';

import './eit.js';
import './body.html';
 
Template.body.helpers({
    eit() {
    // Show newest tasks at the top
    return EIT.find({}, { sort: { Firstname: +1 } });      
      },
    selectedeit() {
    return EIT.find({ checked: { $ne: false } }).count();
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
      
      if (target.eitid.value === '') {
      EIT.insert({
          Firstname,
          Lastname,
          Gender,
          Dateofbirth,
          createdAt: new Date(), // current time
        });
      } else {
      // Insert a new eit into the collection
      EIT.update(target.eitid.value, {
        $set: { 
          Firstname: Firstname, 
          Lastname: Lastname, 
          Gender: Gender,
          Dateofbirth: Dateofbirth
         },
      });
      }
      // Create a new method to update a form according to the ID
   
      // Clear form
      target.Firstname.value = '';
      target.Lastname.value = '';
      target.Gender.value = '';
      target.Dateofbirth.value = '';
      target.eitid.value = '';
      target.submit.value = 'ADD A NEW EIT';
    },
    'click .deleteselected'() { 
      EIT.remove({ checked: { $ne: true } });
    },
  });