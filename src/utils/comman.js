export const validateEmail = (email) => {
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || email.lenth === 0){
        return false;
    }
    if (!emailregex.test(email)){
        return false;
    }

    return true;
    
}