let string = '';
let answer = document.querySelector(".answer");
let btn = document.querySelectorAll("button");
console.log(answer)
answer.value = "hello";

let arrayButton = Array.from(btn);
arrayButton.forEach((btn) => {
    btn.addEventListener("click", function (btns) {
        console.log(btns.target.innerHTML);
        if (btns.target.innerHTML == "=") {
            string = eval(string);
            console.log(string);
            document.querySelector(".answer").innerHTML = string;
        }
        else if (btns.target.innerHTML == "AC") {
            string = "";
            answer.innerHTML = string;
        }
        else if (btns.target.innerHTML == "C") {
            string = string.substring(0, string.length - 1);
            answer.innerHTML = string;
        }


        else {
            string += btns.target.innerHTML;
            answer.innerHTML = string;
        }
    })
})