"""markety URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from core.api_views import ItemAPIViewSet, OrderItemAPIViewSet, RestaurantAPIViewSet, UserAPIViewSet
from rest_framework.authtoken.views import obtain_auth_token


#API ROUTING
router = routers.DefaultRouter()
router.register('users', UserAPIViewSet)
router.register('restaurants', RestaurantAPIViewSet)
router.register('items', ItemAPIViewSet)
router.register('order-items', OrderItemAPIViewSet)



urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', include('core.urls', namespace='core')),
    path('search/', include('haystack.urls')),
    path('api/v1/', include(router.urls)),
    path('api/auth', include('djoser.urls.authtoken')),
    path('auth/', obtain_auth_token),


]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
