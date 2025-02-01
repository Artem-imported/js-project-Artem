const welcomeModal = document.querySelector('.modal--welcome');
const thankyouModal = document.querySelector('.modal--thankU');
const closeWelcomeButton = document.querySelector('.close-welcome');
const closeThankyouButton = document.querySelector('.close-thankU');
const nameForm = document.querySelector('#name-form');

function closeModal(modal) {
    modal.classList.add('modal--hidden');
}
function showThankYou(event) {
    event.preventDefault(); 
    closeModal(welcomeModal);
    thankyouModal.classList.remove('modal--hidden');
}

closeWelcomeButton.addEventListener('click', () => closeModal(welcomeModal));
closeThankyouButton.addEventListener('click', () => closeModal(thankyouModal));
nameForm.addEventListener('submit', showThankYou);

const inputButton = document.getElementById('inputButton');
const inputText = document.querySelector('.header__content--text');
const input = document.getElementById('name-input')
inputButton.addEventListener('click', () => {
    inputText.textContent = `Вітаємо, ${input.value}`;
})


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitBYear").addEventListener("click", () => {
        const year = parseInt(document.getElementById("bYear").value);
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        document.getElementById("bYearRes").textContent = isLeap ? "Ви народилися у високосний рік!" : "Ви народилися не у високосний рік!";
        document.getElementById("bYearRes").style.color = isLeap ? "green" : "red";
    });

    let randNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("subRand").addEventListener("click", () => {
        const random = parseInt(document.getElementById("randNum").value);
        const resultElement = document.getElementById("randRes");
    
        if (random === randNum) {
            resultElement.textContent = `Вітаю, ви вгадали число! (${randNum})`;
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = `Ви програли, комп’ютер загадав (${randNum})`;
            resultElement.style.color = "red";
            randNum = Math.floor(Math.random() * 10) + 1;
        }
    });
    

    document.querySelectorAll(".selectBtn").forEach((button) => {
        button.addEventListener("click", () => {
            const playerChoice = button.dataset.choice;
            const choices = ["Камінь", "Ножиці", "Папір"];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            let result;
            let color;
    
            if (playerChoice === computerChoice) {
                result = "Нічия!";
                color = "black";
            } else if (
                (playerChoice === "Камінь" && computerChoice === "Ножиці") ||
                (playerChoice === "Ножиці" && computerChoice === "Папір") ||
                (playerChoice === "Папір" && computerChoice === "Камінь")
            ) {
                result = "Ти виграв!";
                color = "green";
            } else {
                result = "Комп'ютер виграв!";
                color = "red";
            }
    
            const resultElement = document.getElementById("rpsRes");
            document.getElementById("rpsResId").textContent = `Ти - ${playerChoice} Комп'ютер - ${computerChoice}`;
            resultElement.textContent = result;
            resultElement.style.color = color;
        });
    });

    let selectOper = null;
    document.querySelectorAll(".main__calc--button").forEach((button) => {
        button.addEventListener("click", () => {
            selectOper = button.dataset.operation;
        });
    });
    document.getElementById("equals").addEventListener("click", () => {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        let result;
        switch (selectOper) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Ділення на 0 неможливе";
                break;
            default:
                result = "Оберіть операцію";
        }
        document.getElementById("res").value = result;
    });


    document.getElementById("findMax").addEventListener("click", () => {
        const numA = parseFloat(document.getElementById("numA").value);
        const numB = parseFloat(document.getElementById("numB").value);
        const numC = parseFloat(document.getElementById("numC").value);
        const max = Math.max(numA, numB, numC);
        document.getElementById("maxRes").textContent = `Найбільше число, яке ви ввели - ${max}`;
    });
});

const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerBtn');
footerBtn.addEventListener('click', () => {
    footerInput.value = 'Успішно!';
})