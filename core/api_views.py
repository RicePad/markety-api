from rest_framework import viewsets, status
from .models import Item, OrderItem, Restaurant
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ItemSerializer, OrderItemSerializer, RestaurantItemSerializer, UserSerializer
from rest_framework.permissions import IsAdminUser, SAFE_METHODS



class UserAPIViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )

class ItemAPIViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated,)


class OrderItemAPIViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated,)


class RestaurantAPIViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantItemSerializer
    authentication_classes = (TokenAuthentication, )
    



