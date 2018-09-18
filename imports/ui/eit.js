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
  'click .edit'() {
    var form = document.querySelector(".new-eit");
    form.eitid.value = this._id;
    form.Firstname.value = this.Firstname;
    form.Lastname.value = this.Lastname;
    form.Gender.value = this.Gender;
    form.Dateofbirth.value = this.Dateofbirth;
    form.submit.value = "UPDATE";
  },
});