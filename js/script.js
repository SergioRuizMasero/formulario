function registro(evt, opcion) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(opcion).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function ocultar() {

    document.getElementById("tab1").style.opacity = "1";
    document.getElementById("boton").style.opacity = "0";
    document.getElementById("boton").style.animation="desaparecer 1s ease-out";
    document.getElementById("tab1").style.animation="mostrar 2s ease-in";
    document.getElementById("login").click();
    
    
  }