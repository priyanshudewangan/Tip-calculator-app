const billInput = document.querySelector('.billInput');
const tipButtons = document.querySelectorAll('.buttons button, .buttons input');
const amount = document.getElementById('amount1');
const totalBill = document.getElementById('total1')

tipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let tipValue = 0;

        //In this we are getting the tip amount into the memory
        if(e.target.tagName === "INPUT"){ //parseFloat is used to convert string into numbers
            tipValue = parseFloat(e.target.value) || 0; // when we use custom button
        }
        else{
            tipValue = parseFloat(e.target.textContent.replace('%','')) || 0;
        }

        const bill = parseFloat(billInput.value) || 0;
        const tipAmount = bill * (tipValue/100);
        const total  =  bill + tipAmount;
        amount.textContent = tipAmount.toFixed(2);
        totalBill.textContent =  total.toFixed(2); // Here I didn't put .value
    })
})

billInput.addEventListener('input', (e) => {
    console.log(e.target.value);
})

//For no. of people

const numberOfPeople = document.querySelector('.people');
const peopleInput = numberOfPeople.querySelector('input');
const visibility = document.querySelector('.visibility');
const people = document.querySelector('.noOfPeople')

peopleInput.addEventListener('input', (e) => {
    const peopleCount = parseInt(e.target.value) || 0;

    if (peopleCount > 0) {
        visibility.classList.add('hidden');
        people.classList.remove("border", "border-red-500", "rounded-md");

    } else {
        visibility.classList.remove('hidden');
        people.classList.add("border", "border-red-500", "rounded-md");
    }
});


