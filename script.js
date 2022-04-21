
let searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shopping = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{

    searchForm.classList.remove('active');
    shopping.classList.toggle('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form-container');


document.querySelector('login-btn').onclick = () =>{

    searchForm.classList.remove('active');
    shopping.classList.remove('active');    
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
