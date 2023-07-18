const loginMoodle = document.getElementById('signup-outer-container');
const sigupCross = document.getElementById('signup-cross');
const signupButton = document.getElementById('signup-button');
sigupCross.addEventListener('click',()=>{
    loginMoodle.classList.add('hide')
})
signupButton.addEventListener('click', ()=>{
    loginMoodle.classList.remove('hide');
})