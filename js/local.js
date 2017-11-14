
/*===============================================================*
|    Fonction pour afficher les motifs sur la page de contact    |
*===============================================================*/

function afficherMotif(){
  var a = document.getElementById("autreMotif");
  var b = document.getElementById("listMotif")
  var c = document.getElementById("raisonsA")

  if (b.value=="nope"){
    //a.classList.add("choixAutreHide");

    $(document).ready(function(){
      $("#autreMotif").slideUp(500);
      $("#raisonsA").removeAttr("required")
    });
  }
  else if (b.value=="yep"){
    $(document).ready(function(){
      $("#autreMotif").slideDown(500);
      $("#raisonsA").attr("required","true");
    });
  }
  else{
    a.classList.add("choixAutreHide");
  }


}

/*==========================*
|   La checkbox à cocher    |
*==========================*/

function btnCheckAnimals(){
  if(document.getElementById("aktaManniskor").checked){
    document.getElementById("btnContact").disabled = false;
  }
  else{
    document.getElementById("btnContact").disabled = true;
  }
}
