class Calculator{
    constructor(previousoperand, currentoperand){//use to take all input operation and etc.
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand;
        this.clear();
    }
    clear(){
        this.currentoperand = '';
        this.previousoperand= '';
        this.operation = undefined;//to clear the selected operation
    }
    delete(){
        this.currentoperand = this.currentoperand.toString().slice(0, -1);//slice(0,-1)-- "-1"remove the second to the last string starting from the [0] array
    }
    appendNumber(number){
        if(number === '.' && this.currentoperand.includes('.')) return;//To prevent multiple decimal input
        this.currentoperand = this.currentoperand.toString() + number.toString();//toString()-- to add the next number as a string-- prevent it from being calculated
    }
    computation(operation){
        if(this.currentoperand === '') return;
        if(this.previousoperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousoperand = this.currentoperand;
        this.currentoperand = '';
    }
    compute(){
        let computation;
        const prev =parseFloat(this.previousoperand);//turn all the string into numbers/float
        const current =parseFloat(this.currentoperand);//turn all the string into numbers/float
        if(isNaN(prev) || isNaN(current)) return;
        switch (this.operation){
            case '+'://compare it to selected operation
                computation = prev + current;
                break;//to stop the other case, to stop the switch from doing other case
            case '-':
                computation = prev - current;
                break;
            case '/':
                computation = prev / current;
                break;
            case 'x':
                computation = prev * current;
                break;
            default://use to execute if none of the case was selected (works like else in if-else)
            return;//when there is an inavalid operation just do nothing    
        }
        this.currentoperand = computation;
        this.operation = undefined;
        this.previousoperand = '';
    }
    getdisplaynumber(number){
        const stringNumber = number.toString();
        const integerNumber = parseFloat(stringNumber.split('.')[0]);//first number in the array before the period this acts as the whole numbers
        const decimalNUmber = stringNumber.split('.')[1];//first number in the array after the period this acts as the decimal numbers
        let integerDisplay;
        if(isNaN(integerNumber)){
            integerDisplay = '';
        }else{
            integerDisplay = integerNumber.toLocaleString('en', { //lrepresents language
                maximumFractionDigits:0}).substring(0,15) //to show decimal places (not after the comma though), substring limit the output to 15 string length
        }
        if(decimalNUmber != null){
            return `${integerDisplay}.${decimalNUmber}` //concatenate the decimal between the whole numners and decimal numbers
        }else{
            return integerDisplay; //if no decimal just return
        }
      /*  const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) return '';
        return floatNumber.toLocaleString('en');*/
    }
    updateDisplay(){
        currentoperand.innerText = 
        this.getdisplaynumber(this.currentoperand);
        if(this.operation != null){
            currentoperand.innerText = 
            `${this.operation} ${this.currentoperand.substring(0,15)}` //concatenate the operatio beside the string or number input (I hid this in default)
        }else{
            previousoperand.innerText = '';//to clear the value when equal button was clicked
        }
    }
}

const numKey = document.querySelectorAll('[data-numbers]');
const operation = document.querySelectorAll('[data-operation]');
const equalbtn = document.querySelector('[data-equal]');
const deletebtn = document.querySelector('[data-delete]');
const resetbtn = document.querySelector('[data-reset]');

const previousoperand = document.querySelector('[data-hidden]');
const currentoperand = document.querySelector('[data-visible]');

const calculator = new Calculator(previousoperand, currentoperand);

numKey.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            const counter = currentoperand.textContent.length;
            let maxClick =15;
            if(maxClick != counter){
                calculator.updateDisplay();
            }else{return}

        })
    

})

operation.forEach(button => {
    button.addEventListener('click', () => {
        calculator.computation(button.innerText);
        calculator.updateDisplay();
    })
})

equalbtn.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

resetbtn.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})
deletebtn.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})


