// oder list childNode length function
function getOderListNumber(numberId) {
    const numbers = document.getElementById(numberId).childNodes.length;
    const number = numbers - 1;
    return number;
}
// onclick disabled button function
function disabledButton(buttonId) {
    const btn = document.getElementById(buttonId);
    if (btn.disabled) {
        btn.disabled = false;

    } else {
        btn.disabled = true;
        btn.style.backgroundColor = 'rgb(156 163 175)'
    }
}

// selecet button event handler added
document.getElementById('btn-one').addEventListener('click', function () {
    const playerOneText = document.getElementById('player-one');
    const playerOne = playerOneText.innerText;

    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = playerOne
    listContainer.appendChild(li);
    disabledButton('btn-one')

})
// selecet button event handler added
document.getElementById('btn-tow').addEventListener('click', function () {
    const playerTowText = document.getElementById('player-tow');
    const playerTow = playerTowText.innerText;

    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerTow
    listContainer.appendChild(li);
    disabledButton('btn-tow')

})
// selecet button event handler added
document.getElementById('btn-three').addEventListener('click', function () {
    const playerThreeText = document.getElementById('player-three');
    const playerThree = playerThreeText.innerText;

    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerThree;
    listContainer.appendChild(li);
    disabledButton('btn-three')

})
// selecet button event handler added
document.getElementById('btn-four').addEventListener('click', function () {
    const playerFourText = document.getElementById('player-four');
    const playerFour = playerFourText.innerText;

    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerFour
    listContainer.appendChild(li);
    disabledButton('btn-four');

})
// selecet button event handler added
document.getElementById('btn-five').addEventListener('click', function () {
    const playerFiveText = document.getElementById('player-five');
    const playerFive = playerFiveText.innerText;
    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerFive
    listContainer.appendChild(li);
    disabledButton('btn-five')

})
// selecet button event handler added
document.getElementById('btn-six').addEventListener('click', function () {
    const playerSixText = document.getElementById('player-six');
    const playerSix = playerSixText.innerText;

    const listNumbers = getOderListNumber('list-container')
    if (listNumbers == 5) {
        alert('no more than five players can be added to list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerSix
    listContainer.appendChild(li);
    disabledButton('btn-six')

})


// get input field number function
function getInputFieldValueById(inputId) {
    const inputFieldValu = document.getElementById(inputId);
    const inputFieldValuString = inputFieldValu.value;
    const inputFieldAmount = parseFloat(inputFieldValuString)
    inputFieldValu.value = '';
    return inputFieldAmount;
}

//get text Element function declear
function getTextElementById(TextElementId) {
    const TextElement = document.getElementById(TextElementId)
    const TextElementString = TextElement.innerText
    const Text = parseFloat(TextElementString);
    return Text;

}

// set element value function
function setElementValuById(TextElement, newValue) {
    const setElement = document.getElementById(TextElement);
    setElement.innerText = newValue;
}

// calculate button event handler added
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerAmount = getInputFieldValueById('player-field');

    if (isNaN(perPlayerAmount)) {
        alert('Please input Your valid number')
        return;
    }

    getTextElementById('player-expenses')
    const numbers = getOderListNumber('list-container')
    const playerExpenses = perPlayerAmount * numbers;
    setElementValuById('player-expenses', playerExpenses)

})

// total calculate button event handler added
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerAmount = getInputFieldValueById('manager-field');
    const coachAmount = getInputFieldValueById('coach-field');
    const playerExpensesTotal = getTextElementById('player-expenses')

    if (isNaN(managerAmount)) {
        alert('please input your valid number');
        return;
    }

    if (isNaN(coachAmount)) {
        alert('please input your valid number');
        return;
    }

    const totalExpenses = playerExpensesTotal + managerAmount + coachAmount;
    setElementValuById('total', totalExpenses)

})