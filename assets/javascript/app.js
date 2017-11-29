//set up timeout event; ends after 30 second

var wrongAnswer = 0;
var noAnswer = 0;
var rightAnswer = 0;



setTimeout(timeUp, 1000 * 3);

//time up screen
function timeUp() {
	if(document.getElementsByClassName('correct').checked) {
	  rightAnswer++
	}else if(document.getElementById('wrong').checked) {
	  wrongAnswer++
	};
	// $(".correct:checked").each(function(){
	// 	rightAnswer+=parseInt($(this).val())
	// 	});
	// $("input[name=optradio]").val(rightAnswer);
	$("#correctKey").text("Correct: "+rightAnswer+".");
	$("#timer").text("Time's up sucka");
	$("#wrong").text("Wrong: "+wrongAnswer+"");
	$("#unanswered").text("Unanswered: "+noAnswer+".");
	$(".question").empty("");
//answers right
//answer wrong
};

function startUp() {
	$(".question").show();
}