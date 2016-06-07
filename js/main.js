function getInputValue(){
   var inputBox = document.getElementById("inputBox");
   return inputBox.value;
}
function tweet(){
   var inputBoxValue = getInputValue();
   if(inputBoxValue!=""){
       doTweet(inputBoxValue);
       clean();
   }
}
function doTweet(tweetText){
   var tweets= document.getElementById("lista");

   //Crear elelmento
   var elemento = document.createElement("div");
      elemento.id='comentarios';
      tweets.appendChild(elemento);
   var elemento1 = document.createElement("input");
    elemento1.setAttribute("type","checkbox");
    elemento1.onchange=function(){
    if(elemento1.checked){
      elemento2.innerHTML=tweetText.strike();
    }else{
      elemento2.innerHTML=tweetText;
    }
    }
  var elemento2 =  document.createElement("p");
  elemento2.id="contenido";
  elemento2.innerHTML=tweetText;
  var elemento3 = document.createElement("span");
  elemento3.setAttribute("id","icon");
  elemento3.setAttribute("class","fa fa-trash");
  elemento3.onclick = function(){
    lista.removeChild(elemento);
  }

   elemento.appendChild(elemento1);
   //Agregar elementos
   elemento.appendChild(elemento2);
   //agregar elementos a tweets
   elemento.appendChild(elemento3);

}
function clean(){
   var inputBox = document.getElementById("inputBox");
   inputBox.value="";
   inputBox.focus();
 }

