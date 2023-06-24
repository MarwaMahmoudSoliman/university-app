const pass_field = document.querySelector('.pk');
const showbtn = document.querySelector('.show');
showbtn.addEventListener('click', Function())
if (pass_field.type === "password") {
    pass_field.type === "text";
    showbtn.textContent = "اخفاء";
    showbtn.style.color = "#3498db";
} else {

    pass_field.type = "password";
    showbtn.textContent = "ظهور";
    showbtn.style.color = "#222";
}
;
