from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from you_and_me import views as you_and_me_views

router = DefaultRouter()
router.register(r'universal-categories', you_and_me_views.UniversalCategoryViewSet)
router.register(r'universal-subcategories', you_and_me_views.UniversalSubcategoryViewSet)
router.register(r'universal-subsubcategories', you_and_me_views.UniversalSubSubcategoryViewSet)
router.register(r'brides', you_and_me_views.BrideViewSet)
router.register(r'grooms', you_and_me_views.GroomViewSet)
router.register(r'additional-service-categories', you_and_me_views.AdditionalServiceCategoryViewSet)
router.register(r'additional-service-subcategories', you_and_me_views.AdditionalServiceSubcategoryViewSet)
router.register(r'items', you_and_me_views.ItemViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="You And Me API",
        default_version='v1',
        description="API для управления категориями и услугами",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="support@youandme.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('you_and_me/', include('you_and_me.urls')),
    path('api/', include(router.urls)),

    # URL для документации Swagger
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
