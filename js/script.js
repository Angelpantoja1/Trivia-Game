//Retrieve html elements
let inject = document.getElementById('inject');


function injectHtml(url, ) {

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;//JSON.parse(this.responseText);
            if (url === '../site/mainMenu.html') {
                loadMainMenu(myArr);
            } else if (url === '../site/options.html') {
                loadOptions(myArr);
            } else if (url === '../site/instructions.html') {
                loadInstructions(myArr);
            } else if (url === '../site/lvlSelect.html') {
                loadLvl(myArr);
            } else if (url === '../site/borderlands.html') {
                loadBld1(myArr);
            } else if (url === '../site/borderlands2.html') {
                loadBld2(myArr);
            } else if (url === '../site/borderlands3.html') {
                loadBld3(myArr);
            } else if (url === '../site/gameOver.html') {
                loadgameOver(myArr);
            } else if(url === '../site/video.html'){
                loadVideo(myArr);
            }

        }

    };
    //opens connection
    xmlhttp.open("GET", url, true);

    //pulls the request
    xmlhttp.send();

}

function page1Load(info) {
    //going to load page 1 html elements and click events
    inject.innerHTML = info;

}

function page2Load(info) {
    inject.innerHTML = info;
}


let bl1Data = [];
let bl2Data = [];
let bl3Data = [];
let bl4Data = [];


function loadTriviaData(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            questionInfo(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function questionInfo(info) {
        for (let i = 0; i < info.borderlands1.length; i++) {
            //create an object for each loop in array
            let nFO = {
                "Q": info.borderlands1[i].Q,
                "a1": info.borderlands1[i].a1,
                "a2": info.borderlands1[i].a2,
                "a3": info.borderlands1[i].a3,
                "a4": info.borderlands1[i].a4,
                "c": info.borderlands1[i].c
            };
            bl1Data.push(nFO);
        }
        for (let i = 0; i < info.borderlands2.length; i++) {
            //create an object for each loop in array
            let nFO = {
                "Q": info.borderlands2[i].Q,
                "a1": info.borderlands2[i].a1,
                "a2": info.borderlands2[i].a2,
                "a3": info.borderlands2[i].a3,
                "a4": info.borderlands2[i].a4,
                "c": info.borderlands2[i].c
            };
            bl2Data.push(nFO);
        }
        for (let i = 0; i < info.borderlands3.length; i++) {
            //create an object for each loop in array
            let nFO = {
                "Q": info.borderlands3[i].Q,
                "a1": info.borderlands3[i].a1,
                "a2": info.borderlands3[i].a2,
                "a3": info.borderlands3[i].a3,
                "a4": info.borderlands3[i].a4,
                "c": info.borderlands3[i].c
            };
            bl3Data.push(nFO);
        }
        for (let i = 0; i < info.borderlands4.length; i++) {
            //create an object for each loop in array
            let nFO = {
                "Q": info.borderlands3[i].Q,
                "a1": info.borderlands3[i].a1,
                "a2": info.borderlands3[i].a2,
                "a3": info.borderlands3[i].a3,
                "a4": info.borderlands3[i].a4,
                "c": info.borderlands3[i].c
            };
            bl4Data.push(nFO);
        }
    }
}


function setClass(classString) {
    questions.className = classString;
    answer1.className = classString;
    answer2.className = classString;
    answer3.className = classString;
    answer4.className = classString;
    correct.className = classString;
}

//load mainmenu

function loadMainMenu(info) {
    inject.innerHTML = info;
    let injectLvl = document.getElementById('injectLvl');
    let injectOptions = document.getElementById('injectOptions');
    injectLvl.addEventListener('click', function (e) {
        //call loadJSON to inject HTML
        setTimeout(() => {
            injectHtml('../site/instructions.html');
        }, 1000)
        injectHtml('../site/video.html');

    });
    injectOptions.addEventListener('click', function (e) {
        //call loadJSON to inject HTML
        setTimeout(() => {
            injectHtml('../site/options.html');
        }, 5000)
        injectHtml('../site/video.html');
    });
}

function loadOptions(info) {
    inject.innerHTML = info;
    let funLoad = document.getElementById('funLoad')
    let exitLoad = document.getElementById('exitLoad')
    let backLoad = document.getElementById('backLoad')

    funLoad.addEventListener('click', function () {
        setTimeout(() => {

        }, 5000)
        injectHtml('../site/gameOver.html');
        injectHtml("http://csh.bz/line/05xp.html");
    });
    exitLoad.addEventListener('click', function () {
        injectHtml("https://www.google.com/");
    });
    backLoad.addEventListener('click', function () {
        setTimeout(() => {
            injectHtml("../site/mainMenu.html");
        }, 5000)
        injectHtml('../site/video.html');
    });

}
function loadInstructions(info) {
    inject.innerHTML = info;
    let ready = document.getElementById('ready');

    ready.addEventListener('click', function () {
        setTimeout(() => {
            injectHtml('../site/lvlSelect.html');
        }, 1000)
        injectHtml('../site/video.html');
    });
}
function loadLvl(info) {
    inject.innerHTML = info;
    let injectBld = document.getElementById('injectBld');
    let injectBld2 = document.getElementById('injectBld2');
    let injectBld3 = document.getElementById('injectBld3');

    injectBld.addEventListener('click', function () {
        setTimeout(() => {
            injectHtml('../site/borderlands.html');
        }, 1000)
        injectHtml('../site/video.html');

    });
    injectBld2.addEventListener('click', function () {
        setTimeout(() => {
            injectHtml('../site/borderlands2.html');
        }, 1000)
        injectHtml('../site/video.html');
    });
    injectBld3.addEventListener('click', function () {
        setTimeout(() => {
            injectHtml('../site/borderlands3.html');
        }, 1000)
        injectHtml('../site/video.html');
    });
}

function questionsRandomizer(q) {
    //q is triviaQFUll
    let rNum = 0;
    let triviaQ = [];
    for (let i = 0; i < 20; i++) {
        //we are going to shuffle
        rNum = Math.floor(Math.random() * q.length);
        //console.log(qNum);
        //add from ezQ json array to triviaQ
        triviaQ.push(q[rNum]);
        //Remove the item from ezQ
        q.splice(rNum, 1);
    }
    console.log(triviaQ);
    return triviaQ;
}
let cA = "";
function nextQuestion(obj) {
    let questions = document.getElementById('Q');
    let answer1 = document.getElementById('a1');
    let answer2 = document.getElementById('a2');
    let answer3 = document.getElementById('a3');
    let answer4 = document.getElementById('a4');
    let correct = document.getElementById('c');

    questions.innerText = obj.Q
    answer1.innerText = obj.a1
    answer2.innerText = obj.a2
    answer3.innerText = obj.a3
    answer4.innerText = obj.a4
    correct.innerText = "The Answer is a Secret";
    cA = obj.c;
    qCounter++;
    answered = false;
}


let qCounter = 0;

function loadBld1(info, ) {
    let score = 0;
    inject.innerHTML = info;
    let triviaData = questionsRandomizer(bl1Data);
    let answer1 = document.getElementById('a1');
    let answer2 = document.getElementById('a2');
    let answer3 = document.getElementById('a3');
    let answer4 = document.getElementById('a4');
    let correct = document.getElementById('c');
    let counter = document.getElementById('counter');
    let totalScore = document.getElementById('score');
    cTime = setInterval(checkTime, 1000);

    nextQuestion(triviaData[qCounter]);
    checkTime();

    answer1.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer2.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer3.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer4.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    function checkAnswer(answer) {
        //check if answer is correct
        answered = true;


        if (answer == cA) {
            score++;
            totalScore.innerText = score;
            correct.innerText = cA;
        }
        checkTime();

        setTimeout(() => {
            nextQuestion(triviaData[qCounter]);
            checkAnswer(e.target.innerText);
        }, 3000)
    }
}

function loadBld2(info, ) {
    let score = 0;
    inject.innerHTML = info;
    let triviaData = questionsRandomizer(bl2Data);

    let answer1 = document.getElementById('a1');
    let answer2 = document.getElementById('a2');
    let answer3 = document.getElementById('a3');
    let answer4 = document.getElementById('a4');
    let correct = document.getElementById('c');
    let counter = document.getElementById('counter');
    let totalScore = document.getElementById('score');
    cTime = setInterval(checkTime, 1000);

    nextQuestion(triviaData[qCounter]);
    checkTime();

    answer1.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer2.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer3.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer4.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    function checkAnswer(answer) {
        //check if answer is correct
        answered = true;


        if (answer == cA) {
            score++;
            totalScore.innerText = score;
            correct.innerText = cA;
        }
        checkTime();

        setTimeout(() => {
            nextQuestion(triviaData[qCounter]);
            checkAnswer(e.target.innerText);
        }, 3000)
    }
}
let cTime;
function loadBld3(info, ) {
    let score = 0;
    inject.innerHTML = info;
    let triviaData = questionsRandomizer(bl3Data);

    let answer1 = document.getElementById('a1');
    let answer2 = document.getElementById('a2');
    let answer3 = document.getElementById('a3');
    let answer4 = document.getElementById('a4');
    let correct = document.getElementById('c');
    let counter = document.getElementById('counter');
    let totalScore = document.getElementById('score');
    cTime = setInterval(checkTime, 1000);

    nextQuestion(triviaData[qCounter]);
    checkTime();

    answer1.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer2.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer3.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    answer4.addEventListener('click', function (e) {
        if (!answered) {
            checkAnswer(e.target.innerText);
        }
    });
    function checkAnswer(answer) {
        //check if answer is correct
        answered = true;


        if (answer == cA) {
            score++;
            totalScore.innerText = score;
            correct.innerText = cA;
        }
        checkTime();

        setTimeout(() => {
            nextQuestion(triviaData[qCounter]);
            checkAnswer(e.target.innerText);
        }, 3000)
    }
}
//let triviaTimer = document.getElementById('counter');
let triviaTimer = 180;
//setInterval(checkTime, 1000);
let answered = false;
let myModal = document.getElementById('myModal')
let span = document.getElementsByClassName("close")[0];

function checkTime() {
    if (triviaTimer !=0 && answered == false) {
        counter.innerText = triviaTimer--;
    } else if(triviaTimer===0){
        injectHtml('../site/gameOver.html');
    }
}

function loadVideo(info){
    inject.innerHTML = info;
}

function loadgameOver(info) {
    inject.innerHTML = info;
    let respawn = document.getElementById('respawn');

    respawn.addEventListener('click', function (e) {
        setTimeout(() => {
            injectHtml('../site/lvlSelect.html');
            reset();
        }, 1000)
        injectHtml('../site/video.html');
    });
}

let score =0;
function reset(){
    clearInterval(cTime);
    triviaTimer = 180;
    score = 0;
}

injectHtml("../site/mainMenu.html");
loadTriviaData('../Data/data.json');