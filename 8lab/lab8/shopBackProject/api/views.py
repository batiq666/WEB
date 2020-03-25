from django.shortcuts import render
from django.http.response import JsonResponse
from django.http.response import HttpResponse
from api.models import Category
from api.models import Product

def categories(request):
    categories_list = Category.objects.all()
    categories_list_json = [category.to_json() for category in categories_list]
    return JsonResponse(categories_list_json, safe=False)

def products(request):
    products_ist = Product.objects.all()
    products_list_json = [product.to_json() for product in products_ist]
    return JsonResponse(products_list_json, safe=False)

def category(request, id):
    categories_list = Category.objects.all()
    for category in categories_list:
        if category.id == id:
            return JsonResponse(category.to_json(), safe=False)

def product(request, id):
    products_ist = Product.objects.all()
    for product in products_ist:
        if product.id == id:
            return JsonResponse(product.to_json(), safe=False)

def category_products(request, id):
    products_ist = Product.objects.all()
    products = []
    for product in products_ist:
        if product.category.id == id:
            products.append(product.to_json())
    return JsonResponse(products, safe=False)