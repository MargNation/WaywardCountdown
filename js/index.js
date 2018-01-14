var targetDate = new Date("Jan 18, 2018 20:00:00").getTime();
document.getElementById("target").innerHTML = new Date(targetDate);

// Update the count down every 1 second
var mainTimer = setInterval(function() {

    // Current date and time
    var currentDate = new Date().getTime();
	
    // Find the distance between now an the count down date
	var timeLeft = targetDate - currentDate;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Output the result in corresponding spans
    document.getElementById("daysLeft").innerHTML = days;
    document.getElementById("hoursLeft").innerHTML = hours;
    document.getElementById("minutesLeft").innerHTML = minutes;
    document.getElementById("secondsLeft").innerHTML = seconds;
    
    // If the count down is over, stop counting
    if (timeLeft < 0) {
        clearInterval(mainTimer);
        document.getElementById("daysLeft").innerHTML = 0;
        document.getElementById("hoursLeft").innerHTML = 0;
        document.getElementById("minutesLeft").innerHTML = 0;
        document.getElementById("secondsLeft").innerHTML = 0;
    }
}, 1000);

var media = [["images/24301089_10214621198461212_6290583770791622947_n.jpg", random(1000, 4000)],
            ["images/alexLeaving.gif", random(1000, 2000)], 
            ["images/claireHospital.gif", random(1000, 2000)],
            ["images/alex2.jpg", random(1000, 4000)],  
            ["images/patience1.jpg", random(1000, 4000)], 
            ["images/jodyPossessed.gif", random(1000, 2000)], 
            ["images/kaia1.jpg", random(1000, 4000)], 
            ["images/claire1.jpg", random(1000, 4000)], 
            ["images/three.jpg", random(1000, 4000)], 
            ["images/jody1.jpg", random(1000, 4000)],
            ["images/claireShotgun.gif", random(1000, 2000)],
            ["images/patienceAlex.jpg", random(1000, 4000)],
            ["images/jodyPromo.jpg", random(1000, 4000)], 
            ["images/donna1.jpg", random(1000, 4000)],
            ["images/allFourShoot.gif", random(1000, 2000)],
            ["images/claireKaia.jpg", random(1000, 4000)], 
            ["images/patienceTalking.gif", random(1000, 2000)], 
            ["images/jodyDonnaCar.gif", random(1000, 2000)],
            ["images/claire2.jpg", random(1000, 4000)],
            ["images/alex1.jpg", random(1000, 4000)],  
            ["images/alexClaireDinner.gif", random(1000, 2000)],
            ["images/jodyDonnaRunning.gif", random(1000, 2000)],
            ["images/donnaPlush.gif", random(1000, 2000)],
            ["images/claireLeaving.gif", random(1000, 2000)],
            ["images/claireJody.jpg", random(1000, 4000)], 
            ["images/patienceIntro.gif", random(1000, 2000)], 
            ["images/jodyDonna.jpg", random(1000, 4000)], 
            ["images/alexIntro.gif", random(1000, 2000)],
            ["images/donnaPromo.jpg", random(1000, 4000)], 
            ["images/kaiaClaire.jpg", random(1000, 4000)]]


$(function () {
        var i = 0;
        $("#imagesLeft").css("src", media[i][0]);
        setInterval(function () {
            i++;
            if (i == 10) {
                i = 0;
            }
            $("#imagesLeft").fadeOut("slow", function () {
                $("#imagesLeft").attr("src", media[i][0]);
                $(this).fadeIn(media[i][1]);
            });
        }, random(2000, 4500));

        var j = 10;
        $("#imagesMiddle").css("src", media[j][0]);
        setInterval(function () {
            j++;
            if (j == 20) {
                j = 10;
            }
            $("#imagesMiddle").fadeOut("slow", function () {
                $("#imagesMiddle").attr("src", media[j][0]);
                $(this).fadeIn(media[j][1]);
            });
        }, random(2000, 4500));

        var k = 20;
        $("#imagesRight").css("src", media[k][0]);
        setInterval(function () {
            k++;
            if (k == media.length) {
                k = 19;
            }
            $("#imagesRight").fadeOut("slow", function () {
                $("#imagesRight").attr("src", media[k][0]);
                $(this).fadeIn(media[k][1]);
            });
        }, random(2000, 4500));
    });

// document.getElementById("target").innerHTML = window.innerWidth + " x " + window.innerHeight;

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
