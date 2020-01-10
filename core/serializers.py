from rest_framework import serializers
from .models import Item, OrderItem

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('title', 'price', 'discount_price', 'category', 
                 'label', 'slug', 'description', 'image')
        

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('user', 'item', 'quantity')