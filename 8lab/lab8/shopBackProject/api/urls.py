from django.urls import path
from api.views import categories, products, category, product, category_products
urlpatterns = [
    path('categories', categories),
    path('categories/<int:id>/', category),
    path('categories/<int:id>/products/', category_products),
    path('products', products),
    path('products/<int:id>/', product),
]