
speedDectetor(150)

function speedDectetor(speed){
    console.log(`current speed: ${speed}`)

    if(speed <= 70){
        console.log("Ok")
    } else if(speed > 70){
        let demerits = (speed -70) / 5;
        console.log(`Points:${demerits}`)

        if(demerits > 12){
            console.log("License suspended")
        }
    }

}