

var tackle,
    yards,
    yardsToGo,
    totalYards,
    downs,
    quarter;

var totalYards="";

var downs = 1;

function myfunction(){

  var play = document.getElementById('numberselected').value;
//  console.log(+play);
  var playint = +play;

  switch (playint) {
    case 1:
    runLeft();
    break;

    case 2:

    runMiddle();
    break;

    case 3:

    runRight();
    break;

    case 4:
    shortPassLeft();
    break;

    case 5:

    shortPassMiddle();
    break;

    case 6:

    shortPassRight();
    break;

    default:

    }
}

//======================Plays=============================================
function runLeft(){

var d20 = Math.floor((Math.random() * 20) + 1);
var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20 > 10){
      yards = d10;
      console.log ("run left for " + yards + " yards");
      addYards();
    } else{
      console.log("tackle for no gain");
    }
      checkDowns();


}

function runMiddle(){
    var d20 = Math.floor((Math.random() * 20) + 1);
    var d10 = Math.floor((Math.random() * 10) + 1);

    if (d20>10){
      yards = d10;
      console.log ("run middle for " + d10 + " yards");
        addYards();
    } else{
      console.log("tackle for no gain");
    }
    checkDowns();


}

function runRight(){
    var d20 = Math.floor((Math.random() * 20) + 1);
    var d10 = Math.floor((Math.random() * 10) + 1);

    if (d20>10){
      yards = d10;
      console.log ("run right for " + yards + " yards");

      addYards();
    } else{
      console.log("tackle for no gain");
    }
    checkDowns();


}

function shortPassLeft(){

var d20 = Math.floor((Math.random() * 20) + 1);
var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20 > 10){
      yards = d10;
      console.log ("pass left for " + yards + " yards");
      addYards();
    } else{
      console.log("incomplete");
    }
    checkDowns();



}

function shortPassMiddle(){

var d20 = Math.floor((Math.random() * 20) + 1);
var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20 > 10){
      yards = d10;
      console.log ("pass left for " + yards + " yards");
      addYards();
    } else{
      console.log("incomplete");
    }
    checkDowns();



}

function shortPassRight(){

var d20 = Math.floor((Math.random() * 20) + 1);
var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20 > 10){
      yards = d10;
      console.log ("pass left for " + yards + " yards");
      addYards();
    } else{
      console.log("incomplete");
    }
    checkDowns();
}


//=================================EVAl=====================================




function addYards(){
  totalYards = +totalYards;
  totalYards += yards;


}
function checkDowns(){

  yardsToGo = 10 - totalYards;
  console.log("total yards " + totalYards );
  console.log(yardsToGo + " yards to go");

  if (yardsToGo < 10)
    downs++;
    console.log(downs+ " & " + yardsToGo);
  } 

}


function spectialTeams(){
  console.log("punt or kick a FG?");
}
