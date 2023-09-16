#!/usr/bin/node
// create function to check closuer 

function welcomeMessage (fullName) {
    alert('Welcome ' + fullName);
  }
  
  const guillaume = () => welcomeMessage('Guillaume');
  const alex = () => welcomeMessage('Alex');
  const fred = () => welcomeMessage('Fred');
