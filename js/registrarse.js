document.getElementById('login-form').addEventListener('submit', function(event) {
    // Prevenir la acción por defecto del formulario
    event.preventDefault();
  
    // Recoger los valores de los campos del formulario
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var usuario = document.getElementById('usuario').value;
  
    var user = {
        nombre: usuario,
        correo: email,
        contrasena: password
    };
// Hacer la llamada a la API
fetch('http://127.0.0.1:5000/usuarios', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error al crear el usuario');
    }
})
.then(function(data) {
    if (data.success) {
        document.getElementById('message').textContent = 'Usuario creado exitosamente!';
    } else {
        document.getElementById('message').textContent = 'Error al crear el usuario';
    }
})
.catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
    document.getElementById('message').textContent = 'Error al crear el usuario';
});
});