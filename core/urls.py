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
    HomeViewList,
    ItemCreateView,
    ItemResultView,
    autocomplete,
    ReactView,
    ReactRegistrationView,   
    )


app_name = 'core'

urlpatterns = [
    path('', HomeViewList.as_view(), name="home"),
    path('<int:pk>/results/', ItemResultView.as_view(), name="results"),
    path('autocomplete/', autocomplete, name='autocomplete'),
    path('item/new/', ItemCreateView.as_view(), name="item-new"),
    path('order-summary', OrderSummaryView.as_view(), name="order-summary"),
    path('product/<int:pk>/', ItemDetailView.as_view(), name="product-detail"),
    path('product/<slug>/', ItemDetailView.as_view(), name="product-detail"),
    path('add-to-cart/<slug>/', add_to_cart, name="add-to-cart"),
    path('remove-from-cart/<slug>', remove_from_cart, name="remove-from-cart"),
    path('remove-item-from-cart/<slug>', remove_single_item_from_cart, name="remove-single-item-from-cart"),
    path('checkout/', CheckoutView.as_view(), name="checkout" ),
    path('payment/<payment_option>', PaymentView.as_view(), name="payment"),
    path('react-view', ReactView.as_view(), name="react-view"),
    path('react-register', ReactRegistrationView.as_view(), name="react-registration")



]