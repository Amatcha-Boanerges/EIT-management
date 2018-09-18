import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { EIT } from '../api/eits.js';
 
import './eit.html';

var deleteArray = [];

Template.eitdetails.events({
  'click .toggle-checked'(event) {
    var checkbox = event.target;
    if (checkbox.checked){
      deleteArray.push(this._id);
    } else {
      var index = deleteArray.indexOf(this._id);
      deleteArray.splice(index, 1);
    }
  },
  'click .delete'() {
    Meteor.call('eit.removeone', this._id);
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
Template.body.events({
  'click #deleteBtn'(){
    var i;
    for (i = 0; i < deleteArray.length; i++) {
      // EIT.remove(deleteArray[i]);
      Meteor.call('eit.removeone', deleteArray[i]);
    }
  }
});
// var deleteButton = document.querySelector('#deleteBtn');
//   console.log(deleteButton);
// deleteButton.addEventListener("click",function(){
//   console.log(deleteArray);
// });