document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitBYear").addEventListener("click", () => {
        const year = parseInt(document.getElementById("bYear").value);
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        document.getElementById("bYearRes").textContent = isLeap ? "Це високосний рік" : "Це не високосний рік";
    });

    let randNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("subRand").addEventListener("click", () => {
        const random = parseInt(document.getElementById("randNum").value);
        const result = random === randNum ? "Ти вгадав!" : "Неправильно, спробуй ще!";
        document.getElementById("randRes").textContent = result;
        if (random !== randNum) randNum = Math.floor(Math.random() * 10) + 1;
    });

    document.querySelectorAll(".selectBtn").forEach((button) => {
        button.addEventListener("click", () => {
            const playerChoice = button.dataset.choice;
            const choices = ["Камінь", "Ножиці", "Папір"];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result =
                playerChoice === computerChoice
                    ? "Нічия!"
                    : (playerChoice === "Камінь" && computerChoice === "Ножиці") ||
                      (playerChoice === "Ножиці" && computerChoice === "Папір") ||
                      (playerChoice === "Папір" && computerChoice === "Камінь")
                    ? "Ти виграв!"
                    : "Комп'ютер виграв!";
            document.getElementById("rpsRes").textContent = `Ти: ${playerChoice}, Комп'ютер: ${computerChoice}. ${result}`;
        });
    });

    let selectOper = null;
    document.querySelectorAll(".calc-button").forEach((button) => {
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
        document.getElementById("calcRes").textContent = `Результат: ${result}`;
    });

    //

    document.getElementById("findMax").addEventListener("click", () => {
        const numA = parseFloat(document.getElementById("numA").value);
        const numB = parseFloat(document.getElementById("numB").value);
        const numC = parseFloat(document.getElementById("numC").value);
        const max = Math.max(numA, numB, numC);
        document.getElementById("maxRes").textContent = `Найбільше число: ${max}`;
    });
});