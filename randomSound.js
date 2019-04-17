function findSound(){
  function play1(){
    var audio1 = new Audio("http://www.moviesoundclips.net/movies1/findingnemo/ink.mp3");
    audio1.play();
  }
  function play2(){
    var audio2 = new Audio("http://www.moviesoundclips.net/movies1/findingnemo/funny.mp3");
    audio2.play();
  }
  function play3(){
    var audio3 = new Audio("http://www.moviesoundclips.net/movies1/monstersuniversity/snap.mp3");
    audio3.play();
  }
  function play4(){
    var audio4 = new Audio("http://www.moviesoundclips.net/movies1/toystory3/amigos.mp3");
    audio4.play();
  }
  function play5(){
    var audio5= new Audio("http://www.wavlist.com/movies/257/alad-merchandise.wav");
    audio5.play();
  }
  function play6(){
    var audio6= new Audio ("http://www.moviesoundclips.net/movies1/up/talk.mp3");
    audio6.play();
  }
  function play7(){
    var audio7= new Audio("http://www.moviesoundclips.net/movies1/monstersuniversity/pieces.mp3");
    audio7.play();
  }
  function play8(){
    var audio8= new Audio("http://www.lionking.org/sounds/WAV/HakunaMatataItMeansNoWorries.wav");
    audio8.play();
  }
  function play9(){
    var audio9= new Audio("http://www.lionking.org/sounds/WAV/HakunaMatataItMeansNoWorries.wav");
    audio9.play();
  }
  function play10(){
    var audio10= new Audio("http://www.lionking.org/sounds/WAV/ICouldEatAWholeZebra.wav");
    audio10.play();
  }
  

  var randoNum = Math.floor(Math.random() * 9);
  switch (randoNum){
    case 0 :
    play1();
    break;
    case 1 :
    play2();
    break;
    case 2 :
    play3();
    break;
    case 3 :
    play4();
    break;
    case 4 :
    play5();
    break;
    case 5 :
    play6();
    break;
    case 6:
    play7();
    break;
    case 7:
    play8();
    break;
    case 8:
    play9();
    break;
    case 9:
    play10();
    break;

    
  } 
}
