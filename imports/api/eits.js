import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const EIT = new Mongo.Collection('eit');

// // 'click .deleteselected'() { 
// //     EIT.remove({ checked: { $ne: true } });
// //   },

 Meteor.methods({
//     'eit.insert'(Firstname, Lastname, Gender, Dateofbirth, eitId) {
//       check(Firstname, String);
//       check(Lastname, String);
//       check(Gender, String);
//       check(eitId, String);
      
      // Make sure the user is logged in before inserting a task
    //   if (! Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
   
//       if (eitId === '') {
//         EIT.insert({
//             Firstname,
//             Lastname,
//             Gender,
//             Dateofbirth,
//             createdAt: new Date(), // current time
//             owner: Meteor.userId(),
//             username: Meteor.user().username,
//           });
//         } else {
//         // Insert a new eit into the collection
//         EIT.update(eitId, {
//           $set: { 
//             Firstname: Firstname, 
//             Lastname: Lastname, 
//             Gender: Gender,
//             Dateofbirth: Dateofbirth,
//             owner: Meteor.userId(),
//             username: Meteor.user().username,
//            },
//         });
//         }
//     },
    'eit.removeone'(eitId) {
      check(eitId, String);
      EIT.remove(eitId);
    },
  });
