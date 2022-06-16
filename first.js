

function random()
{
  var randomnumber=Math.floor(Math.random()*6)+1;
  return randomnumber;
}
//gerate ranfinf numrbtr
var randomnumber1=random();
var randomnumber2=random();

var randomDiceImage="dice"+randomnumber1+".png";
var randomImageSrc="images/"+randomDiceImage;

var randomDiceImage2="dice"+randomnumber2+".png";
var randomImageSrc2="images/"+randomDiceImage2;



var image1=document.querySelectorAll("img");
image1[0].setAttribute("src",randomImageSrc);
image1[1].setAttribute("src",randomImageSrc2);

var i = document.querySelector(".container h1");



if(randomnumber1 === randomnumber2)
{
  i.innerHTML = "Tie!";
}
else{
  if(randomnumber1>randomnumber2)
  {
    i.innerHTML="No.1 Won!";
  }
  else
  {
    if(randomnumber1<randomnumber2)
    {
      i.innerHTML="No.2 Won!";
    }
  }
}
