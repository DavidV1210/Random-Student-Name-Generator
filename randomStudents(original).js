var names = prompt('agregar nombres de estudiantes');
if(names === null || names === ''){
  window.stop();
}else{
var nameArray = names.match(/(\w+)\1*/g);
  
  function dontDisplay(){
    document.getElementById("celebrate").style.display = 'none';
  }

  function showNames(){
    var displayNames = names.replace(/(\w+)\s/g, '$1 <br>');
    document.getElementById("studentNames").innerHTML =  displayNames;
    dontDisplay();
  }

  function randomStudent(array){
    if(array.length === 0){
      document.getElementById("results").innerHTML = 'Fin de la lista';
    }else{
      var student = '';
      var numberContainer= [];
      numberContainer.push(Math.floor(Math.random() * array.length));
      for(var i = 0; i < array.length; i++){
        if(i === numberContainer[0]){
          student += array.splice(i,1);
        }
      }
      document.getElementById("celebrate").style.display = 'block';
      celebrate.play()
      document.getElementById("results").innerHTML = `${student} ha sido elegido`; 
    }
  }
  function kickOff(){
    randomStudent(nameArray);
  }
}





  