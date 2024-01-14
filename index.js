function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.getElementById('button').onclick= function list (){

    let name = document.getElementById('name').value;
    console.log(name);

    let email = document.getElementById('email').value;
    console.log(email);

    let phone = document.getElementById('phone').value;
    console.log(phone);

    let message = document.getElementById('message').value;
    console.log(message);



}