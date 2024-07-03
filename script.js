const myName = "cypher-me";
const age = 20;
const inSchool = true;
const myList = ["primary", "secondary", "university"];

console.log(myName);
console.log(age);
console.log(inSchool);
console.log(myList);

const add = function (a, b) {
    let output = a + b;
    return output;
};

const subtract = function (a, b) {
    let output = a - b;
    return output;
};

const divide = function (a, b) {
    let output = a / b;
    return output;
};

const multiply = function (a, b) {
    let output = a * b;
    return output;
};

const hideShowBtn = document.querySelector("#hide-show-btn");
const affPara = document.querySelector("#aff-para");
const submitBtn = document.querySelector("#submitBtn");
const submitAffect = document.querySelector("#submit-affect");
const inputField = document.querySelector("#text-input");

console.log(submitBtn);

hideShowBtn.addEventListener("click", () => {
    if (affPara.style.display != "none") {
        affPara.style.display = "none";
    } else {
        affPara.style.display = "block";
    }
});

submitBtn.addEventListener("click", () => {
    const newText = inputField.value;
    submitAffect.textContent = newText;
});

const ctx = document.querySelector("#myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Nakuru", "Nairobi", "Naivasha", "Nyeri", "Mombasa"],
        datasets: [
            {
                label: "number of branches",
                data: [13, 12, 23, 3, 9],
                borderWidth: 1,
            },
        ],
    },
    options :{
        scales:{
            y : {
                beginAtZero: true
            }
        }
    }
});
