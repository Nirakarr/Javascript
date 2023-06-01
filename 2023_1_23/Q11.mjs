export let inc=(s)=>{
    // let s1=s.includes("Bearer 1234")
    // let s2=s.includes("Bearer")
    // if(s1===true){
    //     let s1="valid token"
    //     return(s1)
    // }
    // else if(s2===true){
    //     let s2=("Invalid Token")
    //     return(s2)
    // }
    // else{
    //     let s3=(`Input is neither "Bearer 1234" nor "Bearer"`)
    //     return(s3) 
    // }
    if(s.startsWith("Bearer 1234")){
        let s1="valid token"
        return(s1)
    }
    else{
        let s2=("Invalid Token")
        return(s2) 
    }
}