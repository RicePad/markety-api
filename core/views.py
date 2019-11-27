from django.shortcuts import render
from .models import Item
from django.views.generic import TemplateView, ListView

# Create your views here.

class HomeView(ListView):
    model = Item
    template_name = "home.html"

def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "product.html", context)


