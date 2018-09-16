import { Template } from 'meteor/templating';
 
import { EIT } from '../api/eit.js';
 
import './eit.html';
 
Template.eitdetails.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    EIT.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    EIT.remove(this._id);
  },
});