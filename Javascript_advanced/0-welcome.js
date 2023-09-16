#!/usr/bin/node

//  create function to concate first name and last name  and display in alert 

function welcome (firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    function displayFullName (fullName) {
      alert('Welcome' + ' ' + fullName + '!');
    }
    displayFullName(fullName);
  }
