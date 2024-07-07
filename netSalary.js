
netSalary(32000);

function netSalary(salary){
    console.log(`salary is: ${salary}`)
    let nhif = nhifContribution(salary)
    console.log(`nhif contribution ${nhif}`)

    let payee = payeeRate(salary)
    console.log(`payee ${payee}`)

    let personalRelief = 2400

    let netSalary = salary - payee - nhif + personalRelief;
    console.log(`netSalary: ${netSalary}`)
    return netSalary;
}

function payeeRate(salary){
    if(salary <= 24000){
        let payee = salary * 0.1;
        return payee;
    } else if (salary > 24000 && salary <= 32333){
        let payee = salary * 0.25;
        return payee;
    } else if (salary >= 32334 && salary <= 500000){
        let payee = salary * 0.3;
        return payee;
    } else if (salary >= 500001 && salary <= 800000){
        let payee = salary * 0.325;
        return payee;
    }else if (salary > 800000){
        let payee = salary * 0.35;
        return payee;
    }
}

function nhifContribution(salary){

    if(salary >= 0 && salary < 6000){
        return 150;
    } else if(salary >= 6000 && salary < 8000){
        return 300
    } else if (salary >= 8000 && salary < 12000){
        return 400
    } else if (salary >= 12000 && salary < 15000){
        return 500
    }else if (salary >= 15000 && salary < 20000){
        return 600
    }else if (salary >= 20000 && salary < 25000){
        return 750
    }else if (salary >= 25000 && salary < 30000){
        return 850
    }else if (salary >= 30000 && salary < 35000){
        return 900
    }else if (salary >= 35000 && salary < 40000){
        return 950
    }else if (salary >= 40000 && salary < 45000){
        return 1000
    }else if (salary >= 45000 && salary < 50000){
        return 1100
    }else if (salary >= 50000 && salary < 60000){
        return 1200
    }else if (salary >= 60000 && salary < 70000){
        return 1300
    }else if (salary >= 70000 && salary < 80000){
        return 1400
    }else if (salary >= 80000 && salary < 90000){
        return 1500
    }else if (salary >= 90000 && salary < 100000){
        return 1600
    }else if (salary >= 100000){
        return 1700
    }

}