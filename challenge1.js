
studentGrade(35)

function studentGrade(input){
    console.log(`input is: ${input}`)

    if(isNaN(input)){
        console.log(`${input} is not a number`)
        return "NaN" 
    }
    if(input > 100 || input < 0 ) {
        console.log(`${input} The input should be between 0 and 100`)
        return "The input should be between 0 and 100"  
    }

    if(input > 79){
        console.log(`${input} is an A`)
        return "A";
    }  else if (input >= 60 && input <= 79){
        console.log(`${input} is a B -`)
        return "B -"
    } else if( input >= 49 && input <= 59){
        console.log(`${input} is a C -`)
        return "C -"  
    } else if ( input >= 40 && input <= 49 ) {
        console.log(`${input} is a D -`)
        return "D -"  
    } else if(input < 40){
        console.log(`${input} is a E -`)
        return "E -" 
    }
}
