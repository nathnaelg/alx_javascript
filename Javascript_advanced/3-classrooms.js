#!/usr/bin/node
// create function and loop

function createClassRoom (numbersOfStudents) {
    function studentSeat (seat) {
      return () => seat;
    }
    const students = [];
    for (let i = 0; i <= numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
    return students;
  }
  
  classRoom = createClassRoom(10);
