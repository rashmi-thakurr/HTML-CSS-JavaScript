//DOM Elemenets
const mainPage = document.querySelector('.main-page');
const loginPage  = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page'); 
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar-wrapper');
const sidebarWrDisplay = document.querySelector('.sidebar-wrapper-display');
const XBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

/*************************************/
/************************************/

//Mainpage

const goToLoginPage = () =>{
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};
middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn')
    {
        goToLoginPage();
    }

})

btnTop.addEventListener('click', () =>{
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !== '' && inputPassword !== '')
    {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'grid';
    }
    else{
        goToLoginPage(); 
        loginModal.style.display = 'block';
         
    }
});

//login page 
modalX.addEventListener('click',() => {
    loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== "" && loginPassword.value !== ""){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }else{
        loginModal.style.display = 'block';
    }
});

//News feed page

//Post modal
postBtn.addEventListener('click', () =>{
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}
postModalX.addEventListener('click',() =>{
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if (modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress',(e) => {
    if (e.target.value !== ""){
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur',(e) => {
    if(e.target.value === ''){
        changeOpacity(0.5)
    }
});

//SIDEBAR

user.addEventListener('click',() => {
    sidebar.classList.add('sidebar-display');
    sidebar.classList.add('sidebar-wrapper-display');
});

XBtn.addEventListener('click', () =>
{
    sidebar.classList.remove('sidebar-display');
    sidebar.classList.remove('sidebar-wrapper-display');
});

//Dark Mode
const darkElements1 =document.querySelectorAll('.dark-mode-1');
const darkElements2 =document.querySelectorAll('.dark-mode-2');
const lightText =document.querySelectorAll('.light-text');
const border =document.querySelectorAll('.border');
toggle.addEventListener('click',()=>
{
    circle.classList.toggle('move');
    Array.from(darkElements1).map(darkElements1 =>
        darkElements1.classList.toggle('dark-1'));

     Array.from(darkElements2).map(darkElements2 =>
        darkElements2.classList.toggle('dark-2'));

    Array.from( lightText).map(lightText =>
        lightText.classList.toggle('light'));

    Array.from(border).map(border =>
         border.classList.toggle('border-color'));
    
});