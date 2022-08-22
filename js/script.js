function getOderListNumber(numberId) {
    const numbers = document.getElementById(numberId).childNodes.length;
    const number = numbers - 1;

    return number;
}
document.getElementById('btn-one').addEventListener('click', function () {
    const playerOneText = document.getElementById('player-one');
    const playerOne = playerOneText.innerText;

    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = playerOne
    listContainer.appendChild(li);


})
document.getElementById('btn-tow').addEventListener('click', function () {
    const playerTowText = document.getElementById('player-tow');
    const playerTow = playerTowText.innerText;

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerTow
    listContainer.appendChild(li);

})
document.getElementById('btn-three').addEventListener('click', function () {
    const playerThreeText = document.getElementById('player-three');
    const playerThree = playerThreeText.innerText;

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerThree;
    listContainer.appendChild(li);

})
document.getElementById('btn-four').addEventListener('click', function () {
    const playerFourText = document.getElementById('player-four');
    const playerFour = playerFourText.innerText;

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerFour
    listContainer.appendChild(li);

})
document.getElementById('btn-five').addEventListener('click', function () {
    const playerFiveText = document.getElementById('player-five');
    const playerFive = playerFiveText.innerText;

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerFive
    listContainer.appendChild(li);

})
document.getElementById('btn-six').addEventListener('click', function () {
    const playerSixText = document.getElementById('player-six');
    const playerSix = playerSixText.innerText;

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerSix
    listContainer.appendChild(li);

})

// player calculation

function getInputFieldValueById(inputId) {
    const inputFieldValu = document.getElementById(inputId);
    const inputFieldValuString = inputFieldValu.value;
    const inputFieldAmount = parseFloat(inputFieldValuString)
    return inputFieldAmount;
}
function getTextElementById(TextElementId) {
    const TextElement = document.getElementById(TextElementId)
    const TextElementString = TextElement.innerText
    const Text = parseFloat(TextElementString);
    return Text;

}
function setElementValuById(TextElement, newValue) {
    const setElement = document.getElementById(TextElement);
    setElement.innerText = newValue;
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerAmount = getInputFieldValueById('player-field');

    getTextElementById('player-expenses')
    const numbers = getOderListNumber('list-container')
    // const playerNumber = 5;
    const playerExpenses = perPlayerAmount * numbers;
    setElementValuById('player-expenses', playerExpenses)


})
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerAmount = getInputFieldValueById('manager-field');
    const coachAmount = getInputFieldValueById('coach-field');
    const playerExpensesTotal = getTextElementById('player-expenses')

    const totalExpenses = playerExpensesTotal + managerAmount + coachAmount;
    setElementValuById('total', totalExpenses)

})