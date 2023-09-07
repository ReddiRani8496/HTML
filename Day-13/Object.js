const student = {
    name:'john',
    age: 25,
    college: 'svu',

    marks: {
        telugu: 80,
        html: 89,
        css: 70,
       printMarks : function() {
            console.log(student.name);
            console.log(this.html);
       },
       distance: {
        tirupati: 100,
        banglore: 150,
        printDistances : function() {
            console.log(student.name);
            console.log(student.marks.html);
            console.log(this.tirupati);
        }
       }
    },
};

student.marks.printMarks();
student.marks.distance.printDistances();

console.log(student.name);
console.log(student['name']);