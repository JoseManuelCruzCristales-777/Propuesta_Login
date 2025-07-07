# Propuesta_Login
Este trabajo tiene como proposito mostrar un login que sea funcional despues de hacer el formulario de registro 

---

## Descripción del Proyecto

- **Login (index.html):**  
  Permite a los usuarios ingresar su usuario y contraseña para acceder.  
  Incluye opción para "Recuérdame" y mensaje de error si los datos no coinciden.  
  En caso de éxito, redirige a una URL (personalizable).

- **Registro (Registro.html):**  
  Los usuarios pueden crear una cuenta, validando usuario único y coincidencia de contraseñas.  
  Si el registro es exitoso, redirige al login y guarda los datos en localStorage.

- **Almacenamiento local:**  
  Los datos de usuario (nombre, correo, contraseña) se guardan en `localStorage` como un array de objetos JSON.

- **Bootstrap & Bootstrap Icons:**  
  Diseño responsivo y elegante.

---

## Guía de Uso Rápido

1. Clona o descarga este repositorio.
2. Abre `index.html` para probar el login.
3. Si no tienes cuenta, haz clic en **"Regístrate aquí"** para crear una nueva.
4. El sistema validará los datos y te permitirá acceder o mostrará mensajes de error si corresponde.

---

## Ejemplo de Uso

### Registro de Usuario

- Ingresa nombre de usuario, correo y contraseña (dos veces).
- Debes aceptar los términos y condiciones.
- El usuario debe ser único y las contraseñas coincidir.

### Inicio de Sesión

- Ingresa tu usuario y contraseña registrados.
- Si son correctos, verás un mensaje de bienvenida y serás redirigido.
- Si no coinciden, aparece un mensaje de error.

---

## Capturas de Pantalla

### Login  
![Login](./img/captura_login.png)

### Registro  
![Registro](./img/captura_registro.png)

*(Agrega tus capturas en la carpeta img y cambia el nombre si lo deseas)*

---

## Notas Importantes

- **Solo uso académico y de práctica.**  
  Este sistema **NO** debe usarse en producción ni con datos reales, ya que las contraseñas no se encriptan y los datos solo se guardan en el navegador del usuario.
- Puedes modificar la redirección tras login en `login.js`.
- Personaliza estilos y funcionalidad según tus necesidades.

---

**¡Gracias por revisar este proyecto!**  
¿Tienes sugerencias? ¡Crea un issue o contáctame!
