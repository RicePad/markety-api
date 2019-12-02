from django.urls import path
from .views import HomeView, ItemDetailView


app_name = 'core'

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('product/<int:pk>/', ItemDetailView.as_view(), name="product-detail"),
    path('product/<slug>/', ItemDetailView.as_view(), name="product-detail"),

]