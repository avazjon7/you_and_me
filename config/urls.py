"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from rest_framework.routers import DefaultRouter

from you_and_me import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'universal-categories', views.UniversalCategoryViewSet)
router.register(r'universal-subcategories', views.UniversalSubcategoryViewSet)
router.register(r'universal-subsubcategories', views.UniversalSubSubcategoryViewSet)
router.register(r'brides', views.BrideViewSet)
router.register(r'grooms', views.GroomViewSet)
router.register(r'additional-service-categories', views.AdditionalServiceCategoryViewSet)
router.register(r'additional-service-subcategories', views.AdditionalServiceSubcategoryViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('you_and_me/', include('you_and_me.urls')),
    path('api/', include(router.urls)),

]
