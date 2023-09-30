let buttons = document.getElementsByClassName('btn');
let input = document.getElementById('input');

let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {


        //Back

        if (button.innerText === "←") {
            input.value = input.value.slice(0, -1); // Remove the last character
        }

        // Multiply
        else if (button.innerText === "X") {
            input.value += '*';
        }
        // Clears
        else if (button.innerText === "C") {
            input.value = '';
        }

        // Equal
        else if (button.innerText === "=") {
            input.value = eval(input.value);

        }

        // Divide
        else if (button.innerText === "/") {
            input.value += "/";
        }

        // Add
        else if (button.innerText === "+") {
            input.value += "+";
            // console.log(input.value);
        }

        // Substract
        else if (button.innerText === "-") {
            input.value += "-";
        }
        else {
            input.value += button.innerText;
        }
    });
});
