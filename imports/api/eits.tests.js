/* eslint-env mocha */
 
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai'; 
import { EIT } from './eits';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isServer) {
  describe('EIT', () => {
    describe('methods', () => {
    //   // const userId = Random.id();
    //   const username = 'yannick';
    //   let taskId, userId;
      
      // run once
      before (() => {
        // check if there is a user
        let user = Meteor.users.findOne({username : username});
        // Test if there is not a user, create one
        if (!user) {
          userId = Accounts.createUser ({
            'username' : username,
            'email' : 'a@blur.com',
            'password' : '1234',
          });
        } else {
          userId = user._id
        }
      });
      beforeEach(() => {
        EIT.remove({});
        newEIT = EIT.insert({
            Firstname: "yannick",
            Lastname: "Amatcha",
            Gender:"M",
            Dateofbirth: "12/12/2011",
            createdAt: new Date(), // current time
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
      });
 
      it('can delete an EIT', () => {
        // Find the internal implementation of the EIT method so we can
        // test it in isolation
        const deleteEIT = Meteor.server.method_handlers['EIT.remove'];
        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };
        // Run the method with `this` set to the fake invocation
        deleteEIT.apply(invocation, [EITId]);
        // Verify that the method does what we expected
        assert.equal(EIT.find().count(), 0);
      });

    //   it("can delete someone else's public task", () => {
        
    //     // Generate random ID to rep. another user
    //     const anotherUserId = Random.id();
        
    //     // test it in isolation
    //     const deleteTask = Meteor.server.method_handlers['EIT.remove'];
        
    //     // Create fake userId
    //     const fakeUserObject = { 'userId' : anotherUserId };
        
    //     // Run the method with `this` set to the fake invocation
    //       deleteTask.apply(fakeUserObject, [taskId]);
    //     // Verify that the method does what we expected

    //     assert.equal(EIT.find().count(), 0);
    //   });

    //   it("cannot delete someone else's task", () => {
        
    //     // Find the internal implementation of the task method so we can
    //     EIT.update(taskId, {$set: {private: true}});
        
    //     // Genernate random ID to rep. another user
    //     const anotherUserId = Random.id();
        
    //     // test it in isolation
    //     const deleteTask = Meteor.server.method_handlers['EIT.remove'];
        
    //     // Create fake userId
    //     const fakeUserObject = { 'userId' : anotherUserId };
        
    //     // verify that exeption is thrown
    //     assert.throws( function(){
    //       // Run the method with `this` set to the fake invocation
    //       deleteTask.apply(fakeUserObject, [taskId]);
    //     }, Meteor.Error,'not-authorized');

    //     // Verify that the method does what we expected

    //     assert.equal(EIT.find().count(), 1);
    //   });

    //   it('can insert task', () => {
    //     //Create a string for the task
    //     const text = 'test'; 
    //     //Get method
    //     const insertTask = Meteor.server.method_handlers['EIT.insert'];
    //     // Create fake user object
    //     const fakeUserObject = { userId };
    //     // Run the method with `this` set to the fake invocation
    //     insertTask.apply(fakeUserObject, [text]);
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find().count(), 2);
    //   });

    //   it('cannot insert task if not logged in', () => {
    //     //Create a string for the task
    //     const text = 'test'; 
    //     //Get method
    //     const insertTask = Meteor.server.method_handlers['EIT.insert'];
    //     // verify that exeption is thrown
    //     assert.throws( function(){
    //       // Run the method with `this` set to the fake invocation
    //           insertTask.apply({}, [text]);;
    //       }, Meteor.Error,'not-authorized');
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find().count(), 1);
    //   });
      
    //   it('can set task checked', () => {

    //     //Get method
    //     const checkedTask = Meteor.server.method_handlers['EIT.setChecked'];
    //     // Create fake user object
    //     const fakeUserObject = { userId };
    //     // Run the method with `this` set to the fake invocation
    //     checkedTask.apply(fakeUserObject, [taskId, true]);
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find({checked : true}).count(), 1);
    //   });

    //   it("cannot set someone else's task checked", () => {

    //     // Find the internal implementation of the task method so we can
    //     EIT.update(taskId, {$set: {private: true}});

    //     // Genernate random ID to rep. another user
    //     const anotherUserId = Random.id();

    //     //Get method
    //     const checkedTask = Meteor.server.method_handlers['EIT.setChecked'];
    //     // Create fake user object
    //     const fakeUserObject = { 'userId' : anotherUserId };
        
    //     assert.throws( function(){
    //       // Run the method with `this` set to the fake invocation
    //       checkedTask.apply(fakeUserObject, [taskId, true]);
    //     }, Meteor.Error,'not-authorized');
        
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find({checked : true}).count(), 0);
    //   });

    //   it('can set private EIT', () => {
    //     //Get method
    //     const privateTask = Meteor.server.method_handlers['EIT.setPrivate'];
    //     // Create fake user object
    //     const fakeUserObject = { userId };
    //     // Run the method with `this` set to the fake invocation
    //     privateTask.apply(fakeUserObject, [taskId, true]);
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find({private : true}).count(), 1);
    //   });

    //   it("cannot set someone else's EIT private ", () => {
    //     // Find the internal implementation of the task method so we can
    //     EIT.update(taskId, {$set: {private: true}});
    //     // Genernate random ID to rep. another user
    //     const anotherUserId = Random.id();
    //     //Get method
    //     const privateTask = Meteor.server.method_handlers['EIT.setPrivate'];
    //     // Create fake user object
    //     const fakeUserObject = { 'userId' : anotherUserId };
        
    //     assert.throws( function(){
    //       // Run the method with `this` set to the fake invocation
    //       privateTask.apply(fakeUserObject, [taskId, false]);
    //     }, Meteor.Error,'not-authorized');
    //     // Verify that the method does what we expected
    //     assert.equal(EIT.find({private : true}).count(), 1);
    //   });
    });
  });
}