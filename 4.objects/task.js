'use strict';
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  };
};

Student.prototype.addMarks = function(...mark) {
  this.marks.push(...mark);
};

Student.prototype.getAverage = function() {
  return this.average = this.marks.reduce((summ, current) => summ + current, 0) / this.marks.length;
};

Student.prototype.exclude = function exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};