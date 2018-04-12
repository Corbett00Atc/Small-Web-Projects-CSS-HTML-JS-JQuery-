// script.js

// click the GO button
$('#go').click(function() {
    
    // check if car won race
    function checkIfComplete() {
        if (raceWon == false) {
            raceWon = true;
        } else {
            place = 'second';
        }
    }
    
    // get the width of the cars
    var carLength = $('#car1').width();
    
    // get lenth car needs to move
    var driveDistance = $(window).width() - carLength;
    
    // generate a random number for each car's speed
    var carSpeed1 = Math.floor( (Math.random() * 5000) + 1);
    var carSpeed2 = Math.floor( (Math.random() * 5000) + 1);

    // set a flag variable to FALSE by default
    var raceWon = false;
    
    // set flag variable to FIRST by default
    var place = 'first';
    
    // move car1
    $('#car1').animate({
        left: driveDistance
    }, carSpeed1, function(){
        checkIfComplete();
        
        // give text feedback in info box
        $('#raceInfo1 span').text('Finished in ' + place 
                                  + ' place and clocked in at ' 
                                  + carSpeed1 + ' milliseconds!');
    });
    
    // move car2
    $('#car2').animate({
        left: driveDistance
    }, carSpeed2, function(){
        checkIfComplete();
        
        // give text feedback in info box
        $('#raceInfo2 span').text('Finished in ' + place 
                                  + ' place and clocked in at ' 
                                  + carSpeed2 + ' milliseconds!');
    });
    
});

$('#reset').click(function() {
    $('.car').css('left','0');
    $('.raceInfo span').text('');
});