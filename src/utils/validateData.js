export const checkValidate = ( email, password)=>{
   
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
      const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    // if(name.length === 0)
    //     return "Name is not valid";
   
    if(!isEmailValid)  return "Email is not Valid";

    if(!isPasswordValid) return "Password is not Valid";

    return null;
}