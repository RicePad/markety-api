from rest_framework import viewsets
from .models import Item, OrderItem, Restaurant
from .serializers import ItemSerializer, OrderItemSerializer, RestaurantItemSerializer
from rest_framework.permissions import IsAdminUser, SAFE_METHODS

class ItemAPIViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class OrderItemAPIViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class RestaurantAPIViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantItemSerializer


