
    document.getElementById('formRegistro').addEventListener('submit', function(e){
      e.preventDefault();

      let usuario = document.getElementById('usuarioReg').value.trim();
      let correo = document.getElementById('correoReg').value.trim();
      let pass1 = document.getElementById('passReg').value;
      let pass2 = document.getElementById('passReg2').value;

      // Validar que contraseñas coincidan
      if(pass1 !== pass2){
        alert("Las contraseñas no coinciden.");
        return;
      }

      // Recuperar lista de usuarios o crear una nueva
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      // Revisar si el usuario ya existe
      if(usuarios.some(u => u.usuario === usuario)){
        alert("El nombre de usuario ya existe.");
        return;
      }

      // Guardar usuario
      usuarios.push({ usuario: usuario, correo: correo, pass: pass1 });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert("¡Usuario registrado con éxito!");
      window.location.href = "index.html"; // Redirige al login
    });
