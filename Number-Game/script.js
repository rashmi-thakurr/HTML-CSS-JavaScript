const startStopBtn = document.getElementById('start-stop-btn');
const listening = document.getElementById('listening');
const output = document.getElementById('op');

let number = [Math.floor(Math.random() * 100)];

//Speech Recognition
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.continuous = false;
recognition.lang = 'en-in';
recognition.interimResults = false;
recognition.maxAlternative = 1;

//synth
const synth = window.speechSynthesis;

//onloading function

window.onload = function(){
    let welcome = new SpeechSynthesisUtterance('Welcome to the number game. Please guess a number between 1 to 100. Tap on the mic to speak. All the very Best! ');
    welcome.text = 'Welcome to the number game. Please guess a number between 1 to 100. Tap on the mic to speak .All the very Best! ';
    welcome.volume =1;
    welcome.rate=0.8;
    welcome.pitch=1;
   
    synth.cancel();
    synth.speak(welcome);

}

recognition.onstart = function () {
    console.log('mic is activated, you can speak now!')
}

recognition.onresult = function (e) {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    output.innerHTML = "You said - " + transcript;
    output.style.color = '#FF8A65';
    output.style.fontSize = '1.5rem';
    if(transcript.includes(number))
    {
        let utter = new SpeechSynthesisUtterance('Congratulations! you won the game.Tap on the mic to play again');
        utter.text = 'Congratulations! you won the game.Tap on the mic to play again' ;
        utter.volume =1;
        utter.rate=0.7;
        utter.pitch=1;
    
        synth.cancel();
        synth.speak(utter);
        let number = [Math.floor(Math.random() * 100)];
    }
    else if(transcript < number)
    {
        let utter = new SpeechSynthesisUtterance("you said - " + transcript + "to win guess a number greater than it.");
        utter.text = ("you said - " + transcript + "to win guess a number greater than it.");
        utter.volume =1;
        utter.rate=0.7;
        utter.pitch=1;
    
        synth.cancel();
        synth.speak(utter);

    }
    else if(transcript>number){
        let utter = new SpeechSynthesisUtterance("you said - " + transcript + "to win guess a number smaller than it.");
        utter.text = ("you said - " + transcript + "to win guess a number smaller than it.");
        utter.volume =1;
        utter.rate=0.7;
        utter.pitch=1;
    
        synth.cancel();
        synth.speak(utter);
    }
    else if(transcript<1 || transcript>100)
    {
        let utter = new SpeechSynthesisUtterance("you said - " + transcript + "It is not between 1 - 100. Please speak a number between 1 - 100 ");
        utter.text = ("you said - " + transcript + "It is not between 1 - 100. Please speak a number between 1 - 100 ");
        utter.volume =1;
        utter.rate=0.7;
        utter.pitch=1;
    
        synth.cancel();
        synth.speak(utter);
    }
    else if(transcript==" ")
    {
        let utter = new SpeechSynthesisUtterance("sorry! couldn't hear that. Please try again.");
        utter.text = ("sorry! couldn't hear that. Please try again.");
        utter.volume =1;
        utter.rate=0.7;
        utter.pitch=1;
    
        synth.cancel();
        synth.speak(utter);
    }
   
}

recognition.onend = function () {
    startStopBtn.style.backgroundColor = 'rgba(245,245,245,0.1)';
    startStopBtn.innerHTML = '<h1><i class="fas fa-microphone"></i></h1>';
    listening.innerHTML = '';
}


//clicking on start button event
startStopBtn.addEventListener('click', () => {
    recognition.start();
    startStopBtn.style.backgroundColor = '#FF8A65';
    startStopBtn.innerHTML = '<h1><i class="fas fa-microphone-alt"></i></h1>';
    listening.innerHTML = 'Listening...';
    listening.style.color = '#FF8A65';
    listening.style.fontSize = '1.5rem';


    if (output.innerHTML != "") {
        output.innerHTML = " ";
    }
})



