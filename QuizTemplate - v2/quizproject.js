let currentQuestion = 0;
let score = 0;
let timeLeft = -1;
let timer;//this will be the timer function
let numHintsLeft = 2;
let numHalsLeft = 1;
let qstartbox = 0;
let questions = [
   {
	"question": "What is the name of part one of JoJo's Bizarre Adventure?",
	"a": "Stardust Crusaders",
	"b": "Battle Tendency",
	"c": "Phantom blood",
	"d": "Golden Wind",
	"image":"quizimages/q1.jpg",
	"answer": "c",
	"hint": "The villain of part one was a vampire",
	"hal": "its not A or D"
   },
   {
	"question": "In what year does part one take place?",
	"a": "Early 2000s",
	"b": "Late 2000s",
	"c": "Early 1880",
	"d": "Late 1890",
	"image":"quizimages/q2.jpg",
	"answer": "c",
	"hint": "Back then they didn't have electric cars",
	"hal": "its not A or B"
   },
   {
	"question": "What is the name of Joseph Joestar's Mother?",
	"a": "Erina Pendleton",
	"b": "Suzi Q",
	"c": "Lisa Lisa",
	"d": "Holly KoJo",
	"image":"quizimages/q3.jpg",
	"answer": "c",
	"hint": "She was also his sensei",
	"hal": "its not A or D"
   },
   {
	"question": "Which of the following statements about the pillar men is incorrect?",
	"a": "Wamuu was the third Pillar Man to die",
	"b": "Kars was launched into space after becoming the Ultimate Lifeform and frozen for eternity",
	"c": "Esidisi was killed by Joseph using hamon during their battle in episode 17",
	"d": "Kars had an IQ of over 400",
	"image":"quizimages/q4.jpg",
	"answer": "c",
	"hint": "The battle with Esidisi did happen in episode 17",
	"hal": "its not B or D"
   },
   {
	"question": "What is the name of the third JoJo?",
	"a": "Jotaro Jostar",
	"b": "Jotaro Joestar",
	"c": "Jotaro Kujo",
	"d": "Jotaro Cujoh",
	"image":"quizimages/q5.jpg",
	"answer": "c",
	"hint": "nah if you don't even know this then you're just bad",
	"hal": "its not A or D"
   },
   {
	"question": "What is the power of DIO's stand?",
	"a": "The power to control stairs",
	"b": "The power to rewrite the reality of anything it punches",
	"c": "The power to stop time",
	"d": "The power to punch really fast",
	"image":"quizimages/q6.jpg",
	"answer": "c",
	"hint": "It was the same type of stand as Star Platinum",
	"hal": "its not A or D"
   },
   {
	"question": "What is the power of Killer Queen's primary bomb?",
	"a": "Rewinds time by roughly one hour and kills whoever tries to move towards Kira within that hour",
	"b": "It moves towards the warmest object in its vicinity and upon reaching the target it automatically induces an explosion with power and blast size equivalent to the heat of the target, this repeats until it explodes from a human",
	"c": "It can change any object to a bomb by touching it",
	"d": "It plants itself in a target and kills whoever tries to reveal Kira's identity. Then it creates a temporal loop, rewinding time by roughly one hour and everyone except the target loses thier memories. Any person killed by the primary bomb in the previous time loop is destined to explode at the exact time that they were previously killed ",
	"image":"quizimages/q7.jpg",
	"answer": "c",
	"hint": "The primary bomb is NOT a Requiem power",
	"hal": "its not A or B"
   },
   {
	"question": "What is the name of the first female JoJo?",
	"a": "Jolyne Joestar",
	"b": "Jolyne Kujo",
	"c": "Shizuka Joestar",
	"d": "Jolyne Cujoh",
	"image":"quizimages/q8.jpg",
	"answer": "c",
	"hint": "We have not seen her in the anime",
	"hal": "its not A or B"
   },
   {
	"question": "How do King Crimson work?",
	"a": "Predicts the future",
	"b": "Erases Time",
	"c": "It just does",
	"d": "Both a and b",
	"image":"quizimages/q9.jpg",
	"answer": "c",
	"hint": "It just works",
	"hal": "its not A or B"
   },
   {
	"question": "Who is the most powerful character in the JoJo franchise?",
	"a": "Giorno Giovanna",
	"b": "Kars • Ultimate Lifeform",
	"c": "DIO • Heaven Ascend",
	"d": "Pucci • Heaven Ascend",
	"image":"quizimages/q10.jpg",
	"answer": "c",
	"hint": "It is a character with a heaven stand",
	"hal": "its not A or B"
   }
 ];

 function loadQuestion() {
     
	//if a timer is loading form a previous question, stop it
	if (timeLeft >= 0) {
		clearInterval(timer);
	}
	 
	qstartbox = 0;
	 
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       document.getElementById("fir").style.display = "none";
       message = "Correct! Let's keep going! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect! The answer was actually C! Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
		if(score == 0){
       message = "Really? not one? Go watch the series first";
		}
		if(score == 1){
       message = "You only got one question right? What a scam, you probably guessed it";
		}
		if(score == 2){
       message = "you only got two questions. Get better noob";
		}
		if(score == 3){
       message = "You're bad! only getting 3 correct is a F! F! F! Go home and watch the series!";
		}
		if(score == 4){
       message = "You're almost got half of it right! Just one more question and you would have gotten 50%!";
		}
		if(score == 5){
       message = "You got half of it correct! To be fair a lot of it was freebies";
		}
		if(score == 6){
       message = "You barely passed with a 60%. You'll have to do better than that to be considered a proper JoJo fan";
		}
		if(score == 7){
       message = "You got 7/10! A fine score but you could have done better.";
		}
		if(score == 8){
       message = "You only got 2 wrong, that's fine some of it was hard. You did good!";
		}
		if(score == 9){
       message = "You almost had it perfect! I like you. You are now a part of the JoJo fandom!";
		}
		if(score == 10){
       message = "You got 100%. nice, you have my respect.";
		}
		document.getElementById("retrybox").style.display = "block";
		clearInterval(timer);
    } else {
       loadQuestion();
    }

    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  //markIt

 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
	document.getElementById("retrybox").style.display = "none";
	
	//if a new question is loaded
	if (currentQuestion <= questions.length - 1 && qstartbox == 0) {
		startTimer();
		qstartbox++;
	}
 }//closeLightbox

function startTimer() {
	timeLeft = 20; //seconds
	timer = setInterval(function (){
		document.getElementById("countDown").innerHTML = timeLeft;
		timeLeft --;
		if (timeLeft < 0){
			clearInterval(timer);
			
			let message = "Time Out! You've run out of time, get better LOL! click anywhere to continue";
			document.getElementById("lightbox").style.display = "block";
			document.getElementById("message").innerHTML = message;
			document.getElementById("retrybox").style.display = "none";
			currentQuestion++;
			loadQuestion();
		}
	}, 1000);
}//startTimer

/*function more(){
	if (numTimesLeft > 0){
		TimeLeft + 50;
		numTimesLeft--;
	}else{
		message = "You have no more plus time left";
		document.getElementById("moreTime").style.display = "none";
	}
}*/
 
function showHint(){
	let message = "";

	if (numHintsLeft > 0){
		message = questions[currentQuestion].hint;
		numHintsLeft--;
	}else{
		message = "You have no more hints left, You had 2 but you used them all. Do better next time LOL";
		document.getElementById("hint").style.display = "none";
	}

	
	document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
	document.getElementById("retrybox").style.display = "none";
}//showHint
 
function hal(){
	let message = "";

	if (numHalsLeft > 0){
		message = questions[currentQuestion].hal;
		numHalsLeft--;
	}else{
		message = "You can only use a 50/50 once!";
		document.getElementById("halve").style.display = "none";
	}

	
	document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
	document.getElementById("retrybox").style.display = "none";
}
function retry(){
	location.reload();
}