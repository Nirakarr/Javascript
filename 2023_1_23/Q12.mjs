// Q12 make a arrow function that will take a number and return you can enter room only if the enter number is less than 18 else you can not enter
export let q12=(n)=>{
    if(n<18){
        let r1=`You can enter room`
        return(r1)
    }
    else{
        let r2=`You cannot enter`
        return(r2)
    }
}