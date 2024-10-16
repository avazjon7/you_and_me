from django.urls import path
from . import views

urlpatterns = [
    # Существующие URL
    path('', views.home, name='home'),
    path('bride/<int:bride_id>/', views.bride_detail, name='bride_detail'),
    path('groom/<int:groom_id>/', views.groom_detail, name='groom_detail'),
    path('universal/<int:category_id>/', views.universal_category_detail, name='universal_category_detail'),
    path('universal/subcategory/<int:subcategory_id>/', views.universal_subcategory_detail,
         name='universal_subcategory_detail'),
    path('additional_services/', views.additional_services, name='additional_services'),
    path('additional_services/<int:category_id>/', views.additional_service_detail, name='additional_service_detail'),

    # Новые URL для добавления категорий и подкатегорий
    path('additional_services/add/', views.add_additional_service_category, name='add_additional_service_category'),
    path('additional_services/add_subcategory/', views.add_additional_service_subcategory,
         name='add_additional_service_subcategory'),
]
