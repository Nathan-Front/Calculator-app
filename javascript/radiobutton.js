const bodybackground = document.querySelector("#body");
const radiobtncontainer = document.querySelector(".radio-button-container");
const radioBTN1 = document.getElementById("radio1");
const radioBTN2 = document.getElementById("radio2");
const radioBTN3 = document.getElementById("radio3");
const spanContainer = document.querySelector(".span-container2");
const displayNum = document.querySelector(".visible-value");
const keyNunContainer = document.querySelector(".button-container");
const numBtn = document.querySelectorAll(".numpadKey");
const resDel = document.querySelectorAll(".numpadKeyED");
const equalBTN = document.querySelector(".equalBtn");


function firstButton(){
    bodybackground.classList.add("active1");
    bodybackground.classList.remove("active2");
    bodybackground.classList.remove("active3");
    radiobtncontainer.classList.add("radioCon1");
    radiobtncontainer.classList.remove("radioCon2");
    radiobtncontainer.classList.remove("radioCon3");
    radioBTN1.classList.add("activeState1");
    radioBTN1.style.opacity = "1";
    radioBTN2.classList.remove("activeState2");
    radioBTN2.style.opacity = "0";
    radioBTN3.classList.remove("activeState3");
    radioBTN3.style.opacity = "0";
    spanContainer.classList.add("spanBackground1");
    spanContainer.classList.remove("spanBackground2");
    spanContainer.classList.remove("spanBackground3");
    displayNum.classList.add("display1");
    displayNum.classList.remove("display2");
    displayNum.classList.remove("display3");
    keyNunContainer.classList.add("keyPad1");
    keyNunContainer.classList.remove("keyPad2");
    keyNunContainer.classList.remove("keyPad3");
    for(var i = 0; i < numBtn.length; i++){
        numBtn[i].classList.add("numBtn1"); 
        numBtn[i].classList.remove("numBtn2");
        numBtn[i].classList.remove("numBtn3");
    }
    for(var i = 0; i < resDel.length; i++){
        resDel[i].classList.add("resetDEL1"); 
        resDel[i].classList.remove("resetDEL2");
        resDel[i].classList.remove("resetDEL3");
    }
    equalBTN.classList.add("equalBtn1");
    equalBTN.classList.remove("equalBtn2");
    equalBTN.classList.remove("equalBtn3");
}

function secondButton(){
    bodybackground.classList.remove("active1");
    bodybackground.classList.add("active2");
    bodybackground.classList.remove("active3");
    radiobtncontainer.classList.remove("radioCon1");
    radiobtncontainer.classList.add("radioCon2");
    radiobtncontainer.classList.remove("radioCon3");
    radioBTN1.classList.remove("activeState1");
    radioBTN1.style.opacity = "0";
    radioBTN2.classList.add("activeState2");
    radioBTN2.style.opacity = "1";
    radioBTN3.classList.remove("activeState3");
    radioBTN3.style.opacity = "0";
    spanContainer.classList.remove("spanBackground1");
    spanContainer.classList.add("spanBackground2");
    spanContainer.classList.remove("spanBackground3");
    displayNum.classList.remove("display1");
    displayNum.classList.add("display2");
    displayNum.classList.remove("display3");
    keyNunContainer.classList.remove("keyPad1");
    keyNunContainer.classList.add("keyPad2");
    keyNunContainer.classList.remove("keyPad3");
    for(var i = 0; i < numBtn.length; i++){
        numBtn[i].classList.add("numBtn2"); 
        numBtn[i].classList.remove("numBtn1"); 
        numBtn[i].classList.remove("numBtn3"); 
    }
    for(var i = 0; i < resDel.length; i++){
        resDel[i].classList.remove("resetDEL1"); 
        resDel[i].classList.add("resetDEL2");
        resDel[i].classList.remove("resetDEL3");
    }
    equalBTN.classList.remove("equalBtn1");
    equalBTN.classList.add("equalBtn2");
    equalBTN.classList.remove("equalBtn3");
}

function thirdButton(){
    bodybackground.classList.remove("active1");
    bodybackground.classList.remove("active2");
    bodybackground.classList.add("active3");
    radiobtncontainer.classList.remove("radioCon1");
    radiobtncontainer.classList.remove("radioCon2");
    radiobtncontainer.classList.add("radioCon3");
    radioBTN1.classList.remove("activeState1");
    radioBTN1.style.opacity = "0";
    radioBTN2.classList.remove("activeState2");
    radioBTN2.style.opacity = "0";
    radioBTN3.classList.add("activeState3");
    radioBTN3.style.opacity = "1";
    spanContainer.classList.remove("spanBackground1");
    spanContainer.classList.remove("spanBackground2");
    spanContainer.classList.add("spanBackground3");
    displayNum.classList.remove("display1");
    displayNum.classList.remove("display2");
    displayNum.classList.add("display3");
    keyNunContainer.classList.remove("keyPad1");
    keyNunContainer.classList.remove("keyPad2");
    keyNunContainer.classList.add("keyPad3");
    for(var i = 0; i < numBtn.length; i++){
        numBtn[i].classList.remove("numBtn1");
        numBtn[i].classList.remove("numBtn2");
        numBtn[i].classList.add("numBtn3");
    }   
    for(var i = 0; i < resDel.length; i++){
        resDel[i].classList.remove("resetDEL1"); 
        resDel[i].classList.remove("resetDEL2");
        resDel[i].classList.add("resetDEL3");
    }
    equalBTN.classList.remove("equalBtn1");
    equalBTN.classList.remove("equalBtn2");
    equalBTN.classList.add("equalBtn3");
}
