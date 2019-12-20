from django.urls import path
from .views import (
    HomeView, 
    ItemDetailView, 
    add_to_cart, 
    remove_from_cart, 
    OrderSummaryView,
    remove_single_item_from_cart,
    CheckoutView,
    PaymentView,
    )


app_name = 'core'

urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('order-summary', OrderSummaryView.as_view(), name="order-summary"),
    path('product/<int:pk>/', ItemDetailView.as_view(), name="product-detail"),
    path('product/<slug>/', ItemDetailView.as_view(), name="product-detail"),
    path('add-to-cart/<slug>/', add_to_cart, name="add-to-cart"),
    path('remove-from-cart/<slug>', remove_from_cart, name="remove-from-cart"),
    path('remove-item-from-cart/<slug>', remove_single_item_from_cart, name="remove-single-item-from-cart"),
    path('checkout/', CheckoutView.as_view(), name="checkout" ),
    path('payment/<payment_option>', PaymentView.as_view(), name="payment"),
\

]