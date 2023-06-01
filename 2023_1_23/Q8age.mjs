export let ticketFee=(age)=>{
    if(age>=1 && age<=12){
        let message=(`since your age is ${age} your ticket is free`)
        return(message)
    }
    else if(age>=13 && age<=60){
        let message=(`since your age is ${age} your ticket cost 80`)
        return(message)
    }
    else if(age>=61 && age<=80){
        let message=(`since your age is ${age} your ticket cost 100`)
        return(message)
    }
    else if(age>80){
        let message=(`since your age is ${age} your ticket cost 200`)
        return(message)
    }
    else{
        let message=("Invalid Input")
        return(message)
    }
}