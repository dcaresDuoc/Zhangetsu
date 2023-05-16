// Datos de usuarios registrados
var users = [];

// Función para registrar un nuevo usuario
function registerUser(username, password) {
  // Comprobar si el usuario ya existe
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      alert("El usuario ya existe.");
      return;
    }
  }

  // Registrar el nuevo usuario
  var newUser = {
    username: username,
    password: password
  };
  users.push(newUser);
  alert("Registro exitoso.");
}

// Función para iniciar sesión
function loginUser(username, password) {
  // Buscar el usuario en la lista
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      alert("Inicio de sesión exitoso.");
      return;
    }
  }

  // Si el usuario no se encuentra en la lista
  alert("Nombre de usuario o contraseña incorrectos.");
}

// Obtener los formularios
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

// Manejar el evento de envío del formulario de inicio de sesión
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  loginUser(username, password);
  loginForm.reset();
});

// Manejar el evento de envío del formulario de registro
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;
  registerUser(newUsername, newPassword);
  registerForm.reset();
});
