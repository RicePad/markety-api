from django.shortcuts import render, get_object_or_404, redirect
from .models import Item, OrderItem, Order
from django.views.generic import TemplateView, ListView, DetailView
from django.utils import timezone
from django.contrib import messages

# Create your views here.

class HomeView(ListView):
    model = Item
    context_object_name = "item_list"
    template_name = "home.html"


class ItemDetailView(DetailView):
    model = Item
    context_object_name = "item_detail"
    template_name = "product_detail.html"

def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)
    order_item, created = OrderItem.objects.get_or_create(
        item=item,
        user=request.user,
        ordered=False
    )
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        #check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "this item quantity was updated.")
            return redirect("core:home")
        else:
            order.items.add(order_item)
            messages.info(request, "this item was added to your cart.")
            return redirect
    else:
        ordered_date = timezone.now()
        order = Order.objects.create( user=request.user, ordered_date=ordered_date)
        messages.info(request, "This item was added to your cart")
        return redirect("core:home")

