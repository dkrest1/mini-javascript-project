// UI variables
const form = document.querySelector('#form')
      username = document.querySelector('#username'),
      email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      password2 = document.querySelector('#password2'),
      checkBox = document.querySelector('#terms');

// listen for submit
form.addEventListener('submit', (e) => {
    // prebent form from submitting
    e.preventDefault()

    // get input values
    const usernameValue = username.value.trim(),
          emailValue = email.value.trim(),
          passwordValue = password.value.trim(),
          password2Value = password2.value.trim(); 


        if(usernameValue === '') {
            showError(username, 'Username cannot be empty')
        }else {
           showSuccess(username)
        }

       
        if(emailValue === '') {
        showError(email, 'Email cannot be empty');
        }else if(!emailValidate(emailValue)) {
            showError(email, 'Enter a correct email');
        }
        else {
            showSuccess(email)
        }

        if(passwordValue === '') {
        showError(password, 'Password cannot be empty');
        }else {
            showSuccess(password);
        }
    
            
        if(password2Value === '') {
        showError(password2, 'Password cannot be empty')
        }else if(password2Value !== passwordValue) {
            showError(password2, 'Password do not match')
        }
        else {
            showSuccess(password2);
        }

        
        //  condition for checkbox
        if(checkBox.checked == false){
            displayError('please accept the terms and conditions');
            setTimeout(() => {
                document.querySelector('.alert').remove()
            }, 3000);
            return false
        }
       
});



//  error 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    formControl.querySelector('.small').innerText = message
    
}

// display error
function displayError(message) {
    const div = document.createElement('div');
    div.className = 'alert'
    div.innerText = message;
    const container = document.querySelector('.container');
    container.insertBefore(div, form)
}

// success
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-group success';
}

// email Validation
function emailValidate(emailVal) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailVal).toLowerCase());
}
