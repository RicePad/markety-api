from django.shortcuts import render
from .models import Item
from django.views.generic import TemplateView

# Create your views here.

def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "product.html", context)



def home(request):
    return render(request, "home.html")


class HomeView(TemplateView):
    template_name = "home.html"