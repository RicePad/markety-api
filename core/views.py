from django.shortcuts import render
from .models import Item
from django.views.generic import TemplateView, ListView, DetailView
# Create your views here.

class HomeView(ListView):
    model = Item
    context_object_name = "item_list"
    template_name = "home.html"


class ItemDetailView(DetailView):
    model = Item
    context_object_name = "item_detail"
    template_name = "product_detail.html"


