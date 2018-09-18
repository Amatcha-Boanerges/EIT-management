import { Mongo } from 'meteor/mongo';
 
export const EIT = new Mongo.Collection('eit');

// 'click .deleteselected'() { 
//     EIT.remove({ checked: { $ne: true } });
//   },