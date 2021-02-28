function gradeAssigner(grade){
    if (grade <= 64){
        console.log(`the grade is F`);
    }else if (grade > 64 && grade <= 69){
        console.log(`the grade is D`);
    } else if (grade >= 70 && grade < 80){
        console.log(`the grade is C`);
    } else if (grade >= 80 && grade < 90){
        console.log(`the grade is B`);
    } else if (grade >= 90 && grade <= 100){
        console.log(`the grade is A`);
    }
}

gradeAssigner(80);