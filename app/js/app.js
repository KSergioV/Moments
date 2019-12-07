const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const clearStorage = document.querySelector('.clear-storage');


// Show Time
function showTime() {
    let now = new Date(),
        hour = now.getHours(),
        min = now.getMinutes(),
        seconds = now.getSeconds();

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}`;

    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set Background and greeting
function setBgGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 05) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Mornig';
    } else if (hour > 10 && hour < 18) {
        document.body.style.backgroundImage = "url('./img/day.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else if (hour > 18 && hour < 21) {
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greeting.textContent = 'Good Evening';
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.innerHTML = 'Good Night'
    }
};

function setName(evt) {
    if (evt.type === 'keypress') {
        if (evt.which == 13 || evt.keyCode == 13) {
            localStorage.setItem('name', evt.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', evt.target.innerText);
    }
}

function getName() {

    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter your name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter your focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
};

function setFocus(evt) {
    if (evt.type === 'keypress') {
        if (evt.which == 13 || evt.keyCode == 13) {
            localStorage.setItem('focus', evt.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', evt.target.innerText);
    }
}

// function clearLocalStorage() {
//     localStorage.clear();
// }


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// clearStorage.addEventListener('click', clearLocalStorage);

setBgGreeting();
showTime();
getName();
getFocus();

