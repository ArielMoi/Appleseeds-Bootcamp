const school = {
    teachers: [{
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [{
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ], 
    // 1.
    findStudent: function (type, id) {
        var student;
        for ([types, students] of Object.entries(school)) {
            if (types == type) {
                students.forEach(function (el){
                    if (el.id == id){
                        student = el;
                    }
                })
            }
        }
        return student;
},
    assignStudent: function (id, subject){
        const student = this.findStudent('students', id);
        const teacher = this.teachers.find(teacher => {
            return teacher.subjects.includes(subject) && teacher.capacityLeft;
        });
        if (teacher){
            teacher.capacityLeft--;
            teacher.students.push(student);
            return teacher;
        } else {
            return console.log('no teachers.')
        }
    },
    assignTeacherSubject: function (teacherID, subject){
        const teacher = this.findStudent('teachers', teacherID);
        if (!teacher.subjects.includes(subject)){
            teacher.subjects.push(subject);
            return teacher;
        }
    },
}

// console.log(school.findStudent('students', 12));
// console.log(school.assignStudent(12, 'history'))
console.log(school.assignTeacherSubject(2, 'art'))