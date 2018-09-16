import { Template } from 'meteor/templating';
 
import { EIT } from '../api/eit.js';

import './body.html';
 
Template.body.helpers({
    eit() {
        return EIT.find({});
      },
});