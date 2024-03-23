const my_button = document.getElementById("my_button")
const my_label = document.getElementById("my_label")

const min = 1;
const max = 6;
let random_num;

my_button.onclick = function(){
    random_num = Math.floor(Math.random() * max) + min;
    my_label.textContent = random_num;
}

