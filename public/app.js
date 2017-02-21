

var tackle,
    yards,
    yardsToGo,
    quarter,
    totalYards;

var downs = 1;

function myfunction(){

  var play = document.getElementById('numberselected').value;
  console.log(+play);
  var playint = +play;

  switch (playint) {
    case 1:
    console.log("run left");
    runLeft();
    break;

    case 2:
    console.log("run middle");
    runMiddle();
    break;

    case 3:
    console.log("run right");
    runRight();
    break;

    default:

    }
}

function runLeft(){

  var d20 = Math.floor((Math.random() * 20) + 1);
  var d10 = Math.floor((Math.random() * 10) + 1);

    if (d20>10){
      yards = d10;
      console.log ("run left for " + yards + " yards");
    } else{
      console.log("tackle for no gain");
    }
    checkDowns();
}

function runMiddle(){
    var d20 = Math.floor((Math.random() * 20) + 1);
    var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20>10){
      console.log ("run middle for " + d10 + " yards");
    } else{
      console.log("tackle for no gain");
    }
    checkDowns();
}

function runRight(){
    var d20 = Math.floor((Math.random() * 20) + 1);
    var d10 = Math.floor((Math.random() * 10) + 1);
    if (d20>10){
      console.log ("run right for " + d10 + " yards");
    } else{
      console.log("tackle for no gain");
    }
    checkDowns();
}

function checkDowns(){


  console.log(yards + " yards");
  if (downs < 4) {
    downs++;
   console.log(downs);
    } else {
   console.log("fourth down, stopped by defense");
   spectialTeams();
    }


}


function spectialTeams(){
  console.log("punt or kick a FG?");
}
