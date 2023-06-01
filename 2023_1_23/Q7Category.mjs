// Q7
export let cat=(n)=>{
if(n>=1 && n<=10){
    return(`${n} is in Category 1`)
}
else if(n>=11 && n<=20){
    return(`${n} is in Category 2`)
}
else if(n>=21 && n<=30){
    return(`${n} is in Category 3`)
}
else{
    return("Input number in between 1 and 30")
}
}