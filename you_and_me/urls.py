from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Создаём объект DefaultRouter
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

    # URL для API
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),




    # URL для обработки запросов от Payme
    # path('payme/initiate/', views.initiate_payment, name='initiate_payment'),
    # path('payme/callback/', views.payme_callback, name='payme_callback'),

]
