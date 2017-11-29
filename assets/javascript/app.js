
var q1 = document.forms['Questions'].elements['questionOne'];
var q2 = document.forms['Questions'].elements['questionTwo'];
var q3 = document.forms['Questions'].elements['questionThree'];
var q4 = document.forms['Questions'].elements['questionFour'];
var correct = 0;
var wrong = 0;
var noAnswer= 0;

//for the timer
var count= 15;
var counter=setInterval(timer, 1000);
//timer function
function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
  document.getElementById("timer").innerHTML="You have "+count + " seconds to finish.";
}
//set value to click functions
for (var i=0, len=q1.length; i<len; i++) {
    q1[i].onclick = function() { 
    };
}
for (var i=0, len=q2.length; i<len; i++) {
    q2[i].onclick = function() { 
    };
}

for (var i=0, len=q3.length; i<len; i++) {
    q3[i].onclick = function() { 
    }
};
//set timeout
setTimeout(timeUp, 1000 * 15);
//time up screen
function timeUp() {
//scores each question
	if (parseInt(q1.value) === 1) {
	correct++;
	} else if (parseInt(q1.value) === 0) {
	wrong++
	} else {
	noAnswer++
	};

	if (parseInt(q2.value) === 1) {
	correct++;
	} else if (parseInt(q2.value) === 0) {
	wrong++
	} else {
	noAnswer++
	};

	if (parseInt(q3.value) === 1) {
	correct++;
	} else if (parseInt(q3.value) === 0) {
	wrong++
	} else {
	noAnswer++
	};
//display results
	$("#timer").text("Time's up, fool");
	$("#correctKey").text("Correct: "+correct);
	$("#wrong").text("Wrong: "+wrong);
	$("#unanswered").text("Unanswered: "+noAnswer);
	$("#Questions").empty("");
};

