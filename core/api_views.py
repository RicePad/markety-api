from rest_framework import viewsets
from .models import Item, OrderItem
from .serializers import ItemSerializer, OrderItemSerializer

class ItemAPIViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class OrderItemAPIViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


