document.getElementById('form-register').addEventListener('submit', (event)=>{
    event.preventDefault()
    // console.log("test");
    const useremail= document.getElementById('useremail').value
    const male=document.getElementById('Male').checked
    const female=document.getElementById('Female').checked

    const username=document.getElementById('username').value
    const password=document.getElementById('password').value
    const repassword=document.getElementById('repass').value

    const ccn = document.getElementById('ccn').value
    const dob= document.getElementById('dob').value
    const agreement= document.getElementById('agree').checked

    console.log(username, useremail, password, repassword, male, female, ccn, dob, agreement);

    if(!useremail.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com')
        return
    }

    if(female==false && male==false){
       alert('Must pick at least one gender')
       return 
    }

    if(username.length<8 || username.length>15){
        alert('Username length must be between 8-15 characters')
        return
    }

    let alpha_count=0
    let digit_count=0

    for(let i=0; i<password.length; i++){
        if(isNaN(password[i])) digit_count++
        else if((password[i]<'z' && password[i]>'a')||(password[i]<'Z' && password[i]>'A'))alpha_count++
    }

    if(alpha_count==0 || digit_count==0){
        alert('Password must be alphanumeric')
        return
    }

    if(password!==repassword){
        alert('Retype password doesn\'t match')
        return
    }

    let all_digit=true
    let correct=true
    let temp_ccn=ccn.split('-')

    temp_ccn.forEach(element => {
        if(element.length!=4) correct=false
        for(let i=0; i<element.length;i++){
            if(isNaN(element[i])) all_digit=false
        }
    });

    if(temp_ccn.length!=4 || ccn.length!=19 || !all_digit || !correct){
        alert('Credit card is invalid')
        return
    }

    if(dob===""){
        alert('Date of birth cant be empty')
        return
    }

    if(!agreement){
        alert('You must agree with all of term and conditions!')
        return
    }

    alert('Registration Success')
    window.location.href='login.html';
})