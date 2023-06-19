from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'index.html', {
        #context
        'message': 'Listado de productos',
        'title': 'Productos',
        'products':[
            {'title':'Escala 1/144','price':28000, 'stock': True},#productos
            {'title':'Escala 1/100','price':39000, 'stock': True},
            {'title':'Escala 1/64','price':76000, 'stock': False},
            {'title':'Escala 1/20','price':150000, 'stock': True},
        ]
         
    })