// script.js

// functions
function calculateTip()
{
    // store input data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    // quick validation
    if (billAmount === "" || serviceQuality == 0)
    {
        window.alert("Please enter values");
        return;
    }
    
    // check to se if input is empty or <= 1
    if (totalPeople === "" || totalPeople <= 1)
    {
        totalPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } 
    else 
    {
        document.getElementById("each").style.display = "block";
    }
    
    // figure out the tip amount
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100; // rounds to a double
    total = total.toFixed(2); // ensures 2 decimal places
    
    // display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };










































