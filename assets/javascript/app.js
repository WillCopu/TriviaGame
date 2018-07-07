


var n = 10;

var win = 0;
var loss = 0;
var unanswered = 0;

var userAnswer1;
var userAnswer2;
var userAnswer3;
var userAnswers = [];
var correctAnswerArray = ["Ambush", "Wisdom", "Crash"];



startBtnTimer();

	function startBtnTimer() {
		$('.startBtn').on('click', function (startTimerGoing) {


		$('.starterScreen').css({
				'display': 'none'
			});
			$('.triviaScreen').css({
				'display': 'block'
			});
			$('.timerScreen').css({
				'display': 'block'
			});
			


		countDown();
	});
}



	function countDown(){
		n--;
		if(n > 0){
			setTimeout(countDown,1000);
			$(".timerScreen").html('<h2> Time Left: ' + n + ' Seconds!</h2>');
		} else {



			createArrayOfUserAnswers();
			compareArray();
			showScoreboard();




			$(".timerScreen").html('<h2> Time is up!</h2>');
			
			$('.triviaScreen').css({
				'display': 'none'
			});
		}
	}



$('.radioSelect1').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer1 = $('input[name="question1"]:checked').val();
	}); 

$('.radioSelect2').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer2 = $('input[name="question2"]:checked').val();
	}); 

$('.radioSelect3').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer3 = $('input[name="question3"]:checked').val();
	}); 



function createArrayOfUserAnswers() {
	userAnswers.push(userAnswer1);
	userAnswers.push(userAnswer2);
	userAnswers.push(userAnswer3);
	console.log(userAnswers);
	}



function compareArray() {

	var userAnswersLength = userAnswers.length;
	
	for (var i = 0; i < userAnswersLength; i++) 
		{
			if (correctAnswerArray[i] === userAnswers[i]) {
				win++;
			} else if (userAnswers[i] === undefined) {
				unanswered++;
			} else {
				loss++;
			}
		}
	}



function showScoreboard() {
			
			$(".scoreBoard").html('<h2>All Done!</h2><h3>Wins: ' + win + '</h3> <h3>Losses: ' + loss + '</h3>' + '<h3>Unanswered: ' + unanswered + '</h3>');
			$('.endScreen').css({
				'display': 'block'
			});
		}	



$('.restartBtn').on('click', function () {


	win = 0;
	loss = 0;
	unanswered = 0;
	n = 10;

	userAnswer1 = 0;
	userAnswer2 = 0;
	userAnswer3 = 0;
	userAnswers = [];


	$(".scoreBoard").empty();
	$('.radioSelect1').prop('checked', false);
	$('.radioSelect2').prop('checked', false);
	$('.radioSelect3').prop('checked', false);


	$('.timerScreen').css({
				'display': 'none'
		});
	$('.starterScreen').css({
				'display': 'block'
		});
	$('.endScreen').css({
				'display': 'none'
		});

})
