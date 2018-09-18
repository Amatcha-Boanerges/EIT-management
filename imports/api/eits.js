import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const EIT = new Mongo.Collection('eit');

// 'click .deleteselected'() { 
//     EIT.remove({ checked: { $ne: true } });
//   },

Meteor.methods({
    'eit.insert'(Firstname, Lastname, Gender, Dateofbirth, eitId) {
      check(Firstname, String);
      check(Lastname, String);
      check(Gender, String);
      check(eitId, String);
      
      // Make sure the user is logged in before inserting a task
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
   
      if (eitId === '') {
        EIT.insert({
            Firstname,
            Lastname,
            Gender,
            Dateofbirth,
            createdAt: new Date(), // current time
            owner: Meteor.userId(),
            username: Meteor.user().username,
          });
        } else {
        // Insert a new eit into the collection
        EIT.update(eitId, {
          $set: { 
            Firstname: Firstname, 
            Lastname: Lastname, 
            Gender: Gender,
            Dateofbirth: Dateofbirth,
            owner: Meteor.userId(),
            username: Meteor.user().username,
           },
        });
        }
    },
    'eit.removeone'(eitId) {
      check(eitId, String);
   
      EIT.remove(eitId);
    },
    'eit.populate'(eitId) {
        check(eitId, String);
        check(Firstname, String);
        check(Lastname, String);
        check(Gender, String);

        var form = document.querySelector(".new-eit");
        form.eitid.value = eitId;
        form.Firstname.value = Firstname;
        form.Lastname.value = Lastname;
        form.Gender.value = Gender;
        form.Dateofbirth.value = Dateofbirth;
        form.submit.value = "UPDATE";
      },
    'eit.setChecked'(eitId, setChecked, deleteArray) {
      check(eitId, String);
      check(setChecked, Boolean);
      check(deleteArray, Array);
   
      var checkbox = event.target;
      if (setChecked){
        deleteArray.push(eitId);
      } else {
        var index = deleteArray.indexOf(eitId);
        deleteArray.splice(index, 1);
      }
    },
  });
