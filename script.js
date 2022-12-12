const pageState = {};

function init(){
    pageState.feedbackValue= undefined;
    clearInterval(pageState.interval);
    toggleEl('loading', false);
    toggleEl('timer', false);
    setTimeout(() => {
        toggleEl('buttons', true);
        setBackground('wheat')
    },2500);
}

function showForm(){
    toggleEl('feedback-form', true);
}

function doSuccess(){
    setBackground('green');
    toggleEl('buttons', false);
}

function doFailure(){
    setBackground('red');
    toggleEl('buttons', false);
}



function doTimer(){
    console.log("Do Timer Function called");
    let timer = 0;
    showSeconds(timer);
    toggleEl('timer', true);
    pageState.interval = setInterval(() => {
        timer++;
        showSeconds(timer);
        doTimerClock(timer);
    }, 1000);
}

function doTimerClock(seconds){
    document.getElementById('timer-clock').style.width = `${seconds*5}px`;
    document.getElementById('timer-clock').style.backgroundColor = `rgb(${seconds*20},0,0)`;
}

function showSeconds(seconds){
    document.getElementById('seconds').innerText = seconds;
}


function doWork(){
    console.log("Do Work function called");
    toggleEl('loading', true);
    doTimer();
}


