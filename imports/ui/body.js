import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  columns: [
    { columnname: 'First name' },
    { columnname: 'Last name' },
    { columnname: 'Gender' },
    { columnname: 'Date of birth' },    
  ],
});