from django.contrib import admin
from .models import Item, OrderItem, Order, UserProfile, Address, Payment, Restaurant

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Item)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Address)
admin.site.register(Payment)
admin.site.register(Restaurant)


