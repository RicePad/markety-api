from django.urls import path
from .views import products, HomeView


app_name = 'core'

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('products/', products, name='products')

]