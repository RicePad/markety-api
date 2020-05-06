from rest_framework import serializers
from .models import Item, OrderItem, Restaurant
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
        
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
        fields = ('user', 'name', 'phone_number', 'address', 'city', 'state', 'about', 'food_minimum', 'delivery_fee', 'is_delivery')


    