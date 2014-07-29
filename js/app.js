
$(document).ready(function(){
	var guessCount = 0;
	var secretNumber;
	var guess;

	//Start a new game once the document has loaded
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
  		newGame();
  	});

  	$("#guessButton").click(function(e){
  		addGuess(e);
  		feedback();
  	});

  	//Gives feedback about the user's guess in relation to the Secret Number
  	function feedback() {
  		if(guess == secretNumber){
  			$("#feedback").text("You are correct!");
  		} else if(Math.abs(guess - secretNumber) < 50) {
  				$("#feedback").text("Cool!");
  				if(Math.abs(guess - secretNumber) < 25) {
  					$("#feedback").text("Warm!");
  					if(Math.abs(guess - secretNumber) < 10) {
  						$("#feedback").text("Hot!");
  					}
  				}
  		} else {
  			$("#feedback").text("Cold!");
  		}
  	}

  	//Adds guess's to guess list and increments count
  	function addGuess(e) {
   		guess = $("#userGuess").val();
  		var clear = $("#userGuess").val("");
  		guessCount++;

  		if(guess > 0 && guess <= 100) {
  			$("#guessList").append("<li>" + guess + "</li>");
  			clear;
  			$("#count").text(guessCount);
  		}
  		
  		e.preventDefault();
  	}

  	//Function called on click of New Game button
  	function newGame() {
  		//Get new secret number
  		secretNumber = setRandomNumber();
  		
  		//Set guess count to 0
  		guessCount = 0;

  		//Remove all previous Guess's
  		$("#guessList").children().hide();

  		//Remove feedback
  		$("#feedback").text("Make your Guess!");

  		//Set count back to 0
  		$("#count").text("0");

  	}

  	function setRandomNumber() {
  		return(Math.floor((Math.random() * 100) + 1));
  	}

});


