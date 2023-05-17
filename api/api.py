import csv
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Diccionario para almacenar los usuarios
usuarios = {}

def cargar_usuarios():
    try:
        with open('usuarios.txt', 'r') as f:
            reader = csv.reader(f)
            for row in reader:
                id, correo, contrasena, nombre = row
                usuarios[id] = {
                    'correo': correo,
                    'contrasena': contrasena,
                    'nombre': nombre,
                }
    except FileNotFoundError:
        pass  # Si el archivo no existe, no hacemos nada.

def guardar_usuario(id, correo, contrasena, nombre):
    with open('usuarios.txt', 'a') as f:
        writer = csv.writer(f)
        writer.writerow([id, correo, contrasena, nombre])

@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    if not request.json or 'nombre' not in request.json or 'correo' not in request.json or 'contrasena' not in request.json:
        return jsonify({'success': False}), 400
    id = str(len(usuarios) + 1) # Generamos un id para el nuevo usuario
    correo = request.json['correo']
    contrasena = request.json['contrasena']
    nombre = request.json['nombre']
    usuarios[id] = {
        'correo': correo,
        'contrasena': contrasena,
        'nombre': nombre,
    }
    guardar_usuario(id, correo, contrasena, nombre)
    return jsonify({'success': True})

@app.route('/usuarios', methods=['GET'])
def obtener_usuario():
    correo = request.args.get('correo')
    contrasena = request.args.get('contrasena')
    for usuario in usuarios.values():
        if usuario['correo'] == correo and usuario['contrasena'] == contrasena:
            return jsonify({'success': True})
    return jsonify({'success': False}), 404

@app.route('/ejemplo', methods=['GET'])
def ejemplo():
    return 'Hola Mundo'

cargar_usuarios()

if __name__ == '__main__':
    app.run(debug=True)
