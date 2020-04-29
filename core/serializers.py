from rest_framework import serializers
from .models import Item, OrderItem, Restaurant

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('title', 'price', 'discount_price', 'category', 
                 'label', 'slug', 'description', 'image')
        

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('user', 'item', 'quantity')


class RestaurantItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('name', 'phone_number', 'address', 'city', 'state', 'about', 'food_minimum', 'delivery_fee', 'is_delivery')