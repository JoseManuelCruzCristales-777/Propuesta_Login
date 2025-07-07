 
    document.getElementById('loginForm').addEventListener('submit', function(e){
      e.preventDefault();

      let usuario = document.getElementById('usuario').value.trim();
      let contrasena = document.getElementById('contrasena').value;

      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      let userEncontrado = usuarios.find(u => u.usuario === usuario && u.pass === contrasena);

      if(userEncontrado){
        alert("¡Bienvenido, " + usuario + "!");
      
         window.location.href = "https://www.facebook.com/josemanuecristales";
      }else{
        alert("Usuario o contraseña incorrectos.");
      }
    });
