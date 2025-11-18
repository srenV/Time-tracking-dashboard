
// all buttons, highlighted values (current), past values
const dailyButton = document.getElementById('dailyButton');
const weeklyButton = document.getElementById('weeklyButton');
const monthlyButton = document.getElementById('monthlyButton');

const currentDay = document.querySelectorAll('.currentDay');
const currentWeek = document.querySelectorAll('.currentWeek');
const currentMonth = document.querySelectorAll('.currentMonth');

const pastDay = document.querySelectorAll('.pastDay');
const pastWeek = document.querySelectorAll('.pastWeek');
const pastMonth = document.querySelectorAll('.pastMonth');


// first set all display values to none and then set the right ones to display: flex
function showSet(current, past) {
    
    currentDay.forEach(e => e.style.display = 'none');
    currentWeek.forEach(e => e.style.display = 'none');
    currentMonth.forEach(e => e.style.display = 'none');

    pastDay.forEach(e => e.style.display = 'none');
    pastWeek.forEach(e => e.style.display = 'none');
    pastMonth.forEach(e => e.style.display = 'none');

    
    current.forEach(e => e.style.display = 'flex');
    past.forEach(e => e.style.display = 'flex');
}

// every button sets the font color and then passes the correct variables to the showSet function
function dailyChange() {
    dailyButton.style.color = 'white';
    weeklyButton.style.color = 'hsl(235, 45%, 61%)';
    monthlyButton.style.color = 'hsl(235, 45%, 61%)';

    showSet(currentDay, pastDay);
}

function weeklyChange() {
    dailyButton.style.color = 'hsl(235, 45%, 61%)';
    weeklyButton.style.color = 'white';
    monthlyButton.style.color = 'hsl(235, 45%, 61%)';

    showSet(currentWeek, pastWeek);
}

function monthlyChange() {
    dailyButton.style.color = 'hsl(235, 45%, 61%)';
    weeklyButton.style.color = 'hsl(235, 45%, 61%)';
    monthlyButton.style.color = 'white';

    showSet(currentMonth, pastMonth);
}
