// import stateIncomeTaxRates from "../data/data";

let showIncome = document.getElementById("salary");
let showState = document.getElementById("region");
// let calcTotalTax = document.getElementById("totalTax");
// let calcNetPay = document.getElementById("annualNetPay");
// let calcMontlyNet = document.getElementById("monthlyNetPay");
// let avgRate = document.getElementById("avgTaxRate");
// let margRate = document.getElementById("margTaxRate");
// let calcDollarMargTax = document.getElementById("dollarOfMarginalTax");
// let calcDollarMargIncrease = document.getElementById("marginalIncrease");
let showDollarBonus1 = document.getElementById("dollarBonus1");
// let calBonusTakeHome1 = document.getElementById("bonusTakeHome");
let showDollarBonus2 = document.getElementById("dollarBonus2");
// let calBonusTakeHome2 = document.getElementById("bonusTakeHome");

function getElemAndShow(strg, value) {
    document.getElementById(strg).textContent = value;
}
// getElemAndShow()
function formatNumber(number, decimalPlaces) {
    return number.toLocaleString(undefined, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
}

const taxRates = [
    { state: "North Carolina", taxRate: 0.22 },
    { state: "Idaho", taxRate: 0.19 },
    { state: "Maryland", taxRate: 0.22 },
    { state: "New Mexico", taxRate: 0.29 },
    { state: "Arizona", taxRate: 0.21 },
    { state: "Georgia", taxRate: 0.25 },
];

const marginalTaxRates = [
    { state: "North Carolina", margTaxRate: 0.32 },
    { state: "Idaho", margTaxRate: 0.39 },
    { state: "Maryland", margTaxRate: 0.35 },
    { state: "New Mexico", margTaxRate: 0.32 },
    { state: "Arizona", margTaxRate: 0.31 },
    { state: "Georgia", margTaxRate: 0.35 },
];

const form = document.getElementById("form");
// let userArray = [];
let userState;
let stateAvgRate;
let stateMargRate;
let userObj;
// let summary = document.getElementById("summary");

form.addEventListener("submit",function (e) {
    onFormSubmit(e)
  });

function onFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("Data", data);
    const dataObject = Object.fromEntries(data.entries());
    // userArray.push(dataObject);
    console.log(dataObject);
    // console.log(userArray);
    form.reset();
    userState = dataObject.state;
    console.log(userState);
    stateAvgRate = taxRates.find((item) => item.state === userState);
    stateMargRate = marginalTaxRates.find((item) => item.state === userState);
    userObj = {
        income: dataObject.income,
        taxRate: stateAvgRate.taxRate,
        margTaxRate: stateMargRate.margTaxRate,
    };
    console.log(userObj);
    calculate(userObj);
    showSummary();
    // summary.reset();

}

function calculate(user) {
    userObj.calcTotalTax = (user.income * user.taxRate).toFixed(2);
    userObj.calcNetPay = (user.income / (1 + user.taxRate)).toFixed(2);
    userObj.calcMontlyNet = (user.calcNetPay / 12).toFixed(2);
    userObj.avgRate = (user.taxRate).toFixed(2);
    userObj.margRate = (user.margTaxRate).toFixed(2);
    userObj.calcDollarMargTax = (user.margTaxRate * 100).toFixed(2);
    userObj.calcDollarMargIncrease = (100 - user.calcDollarMargTax).toFixed(2);
    userObj.calBonusTakeHome1 = (1000 - user.calcDollarMargTax).toFixed(2);
    userObj.calBonusTakeHome2 = (5000 - user.calcDollarMargTax).toFixed(2);
}

function showSummary() {
    getElemAndShow("salary", userObj.income);
    getElemAndShow("region", userState);
    getElemAndShow("totalTax", userObj.calcTotalTax);
    getElemAndShow("annualNetPay", userObj.calcNetPay);
    getElemAndShow("monthlyNetPay", userObj.calcMontlyNet);
    getElemAndShow("avgTaxRate", userObj.avgRate);
    getElemAndShow("margTaxRate", userObj.margRate);
    getElemAndShow("dollarOfMarginalTax", userObj.calcDollarMargTax);
    getElemAndShow("marginalIncrease", userObj.calcDollarMargIncrease);
    getElemAndShow("bonusTakeHome", userObj.calBonusTakeHome1);
    getElemAndShow("bonusTakeHome2", userObj.calBonusTakeHome2);
}
document.addEventListener("DOMContentLoaded", showPieChart);

// function showPieChart() {
//     console.log("pie-chart on load");

//     let sliceA = {
//         size: 250, color: "blue";
//     }
//     let sliceB = {
//             size: 750, color: "pink";
//         }
//         const values = [sliceA.size, sliceB.size];
//         const total = values.reduce((acc, val) => acc + val, 0);

//         let startAngle = 0;
//         //values of the pie chart %//

//         const canvas = document.getElementById("pie-chart");
//         const ctx = canvas.getContext("2d");

//         //calculate angles//
//         values.forEach((value, index) => {
//             const angle=(value/total) * Math.PI * 2;

//             //draw a slice//
//             ctx.beginPath();
//             ctx.moveTo(canvas.width /2, canvas.height /2);
//             ctx.arc(

//             )
//         })
//     }