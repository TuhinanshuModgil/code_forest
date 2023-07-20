const signupMoodle = document.getElementById('signup-outer-container');
const loginMoodle = document.getElementById('login-outer-container');
const sigupCross = document.getElementById('signup-cross');
const loginCross = document.getElementById('login-cross');
const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');


sigupCross.addEventListener('click',()=>{
    signupMoodle.classList.add('hide')
})
signupButton.addEventListener('click', ()=>{
    signupMoodle.classList.remove('hide');
})


loginCross.addEventListener('click',()=>{
    loginMoodle.classList.add('hide')
})
loginButton.addEventListener('click', ()=>{
    loginMoodle.classList.remove('hide');
})