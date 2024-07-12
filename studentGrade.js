
studentGrade(35)

function studentGrade(marks){
    console.log(`marks is: ${marks}`)

    if(isNaN(marks)){
        console.log(`${marks} is not a number`)
        return "NaN" 
    }
    if(marks > 100 || marks < 0 ) {
        console.log(`${marks} The marks should be between 0 and 100`)
        return "The marks should be between 0 and 100"  
    }

    if(marks > 79){
        console.log(`${marks} is an A`)
        return "A";
    }  else if (marks >= 60 && marks <= 79){
        console.log(`${marks} is a B -`)
        return "B -"
    } else if( marks >= 49 && marks <= 59){
        console.log(`${marks} is a C -`)
        return "C -"  
    } else if ( marks >= 40 && marks <= 49 ) {
        console.log(`${marks} is a D -`)
        return "D -"  
    } else if(marks < 40){
        console.log(`${marks} is a E -`)
        return "E -" 
    }
}
