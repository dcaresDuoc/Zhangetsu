document.getElementById('login-form').addEventListener('submit', function(event) {
  // Prevenir la acción por defecto del formulario
  event.preventDefault();

  // Recoger los valores de los campos del formulario
  var email = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;

  // Hacer la llamada a la API
  fetch('http://127.0.0.1:5000/usuarios?correo=' + email + '&contrasena=' + password)
      .then(function(response) {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Error al iniciar sesión');
          }
      })
      .then(function(data) {
          if (data.success) {
              document.getElementById('message').textContent = 'Inicio de sesión exitoso!';
              window.location.href ='../index.html';
          } else {
              document.getElementById('message').textContent = 'Correo o contraseña incorrectos';
          }
      })
      .catch(function(error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
          document.getElementById('message').textContent = 'Error al iniciar sesión';
      });
});