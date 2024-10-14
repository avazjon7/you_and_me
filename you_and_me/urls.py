from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('bride/<int:bride_id>/', views.bride_detail, name='bride_detail'),
    path('groom/<int:groom_id>/', views.groom_detail, name='groom_detail'),
    path('universal/<int:category_id>/', views.universal_category_detail, name='universal_category_detail'),
    path('universal/subcategory/<int:subcategory_id>/', views.universal_subcategory_detail, name='universal_subcategory_detail'),
]
