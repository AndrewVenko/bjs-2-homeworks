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

Student.prototype.marks = function addMarks(mark1, mark2, mark3, ...mark) {
  this.marks.push(mark1, mark2, mark3, ...mark);
};

Student.prototype.getAverage = function() {
  let arithteticMean = 0;
  let arr;
  for (let value of Object.entries(this)) {
    if (value[0] === 'marks') {
      arr = value[1];
    }
  };
  for(let i = 0; i < arr.length; i = i + 1) {
    arithteticMean = arithteticMean + arr[i];
  };
  arithteticMean = arithteticMean / arr.length;
  this.arithteticMean = arithteticMean;
};

Student.prototype.exclude = function exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};