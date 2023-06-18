from django.http import HttpResponse

def index(resquest):
    return HttpResponse('hola desde el archivo viwes.py')