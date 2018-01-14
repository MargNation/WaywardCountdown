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

var media = [["images/24301089_10214621198461212_6290583770791622947_n.jpg", random(2000, 4000)],
            ["images/kimBriInCar.gif", random(2000, 4000)],
            ["images/briana1.jpg", random(1000, 4000)], 
            ["images/brianaPromo.jpg", random(1000, 4000)], 
            ["images/clark1.jpg", random(1000, 4000)], 
            ["images/clarkKat.jpg", random(1000, 4000)], 
            ["images/kat1.jpg", random(1000, 4000)], 
            ["images/kat2.jpg", random(1000, 4000)], 
            ["images/kim1.jpg", random(1000, 4000)], 
            ["images/kimBriana.jpg", random(1000, 4000)], 
            ["images/kimPromo.jpg", random(1000, 4000)], 
            ["images/newton1.jpg", random(1000, 4000)], 
            ["images/newton2.jpg", random(1000, 4000)], 
            ["images/newtonKim.jpg", random(1000, 4000)], 
            ["images/newtonYadi.jpg", random(1000, 4000)], 
            ["images/three.jpg", random(1000, 4000)], 
            ["images/yadi1.jpg", random(1000, 4000)], 
            ["images/yadiNewton.jpg", random(1000, 4000)], 
            ["images/kaiaMonster.gif", random(2000, 4000)], 
            ["images/kimBriRunning.gif", random(2000, 3000)],
            ["images/claireGif.gif", random(2000, 4000)],
            ["images/kimBriPatienceAlex.gif", random(2000, 4000)]]


$(function () {
        var i = 0;
        $("#imagesLeft").css("src", media[i][0]);
        setInterval(function () {
            i++;
            if (i >= media.length) {
                i = 0;
            }
            $("#imagesLeft").fadeOut("slow", function () {
                $("#imagesLeft").attr("src", media[i][0]);
                $(this).fadeIn(media[i][1]);
            });
        }, random(2000, 4500));

        var j = 3;
        $("#imagesMiddle").css("src", media[j][0]);
        setInterval(function () {
            j++;
            if (j >= media.length) {
                j = 3;
            }
            $("#imagesMiddle").fadeOut("slow", function () {
                $("#imagesMiddle").attr("src", media[j][0]);
                $(this).fadeIn(media[j][1]);
            });
        }, random(2000, 4500));

        var k = 6;
        $("#imagesRight").css("src", media[k][0]);
        setInterval(function () {
            k++;
            if (k >= media.length) {
                k = 6;
            }
            $("#imagesRight").fadeOut("slow", function () {
                $("#imagesRight").attr("src", media[k][0]);
                $(this).fadeIn(media[k][1]);
            });
        }, random(2000, 4500));
    });

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
