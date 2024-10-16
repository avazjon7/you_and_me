from django.contrib import admin
from .models import (
    Category, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory, Bride, Sarpo, Stylist, WeddingDress,
    Groom, GroomEssentials, GroomStylist, GroomAttire, AdditionalServiceCategory, AdditionalServiceSubcategory
)

# Register models with inlines for subcategories in admin
class UniversalSubcategoryInline(admin.TabularInline):
    model = UniversalSubcategory
    extra = 1


class UniversalCategoryAdmin(admin.ModelAdmin):
    inlines = [UniversalSubcategoryInline]
    list_display = ['name']
    search_fields = ['name']


class UniversalSubSubcategoryInline(admin.TabularInline):
    model = UniversalSubSubcategory
    extra = 1


class UniversalSubcategoryAdmin(admin.ModelAdmin):
    inlines = [UniversalSubSubcategoryInline]
    list_display = ['category', 'name']
    search_fields = ['category__name', 'name']
    list_filter = ['category']


# Registering other models
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class BrideAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class SarpoAdmin(admin.ModelAdmin):
    list_display = ['bride', 'category']
    search_fields = ['bride__name', 'category']


class StylistAdmin(admin.ModelAdmin):
    list_display = ['bride', 'category']
    search_fields = ['bride__name', 'category']


class WeddingDressAdmin(admin.ModelAdmin):
    list_display = ['bride', 'category']
    search_fields = ['bride__name', 'category']


class GroomAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class GroomEssentialsAdmin(admin.ModelAdmin):
    list_display = ['groom', 'category']
    search_fields = ['groom__name', 'category']


class GroomStylistAdmin(admin.ModelAdmin):
    list_display = ['groom', 'category']
    search_fields = ['groom__name', 'category']


class GroomAttireAdmin(admin.ModelAdmin):
    list_display = ['groom', 'category']
    search_fields = ['groom__name', 'category']


class AdditionalServiceSubcategoryInline(admin.TabularInline):
    model = AdditionalServiceSubcategory
    extra = 1


class AdditionalServiceCategoryAdmin(admin.ModelAdmin):
    inlines = [AdditionalServiceSubcategoryInline]
    list_display = ['name']
    search_fields = ['name']


admin.site.register(Category, CategoryAdmin)
admin.site.register(UniversalCategory, UniversalCategoryAdmin)
admin.site.register(UniversalSubcategory, UniversalSubcategoryAdmin)
admin.site.register(UniversalSubSubcategory)
admin.site.register(Bride, BrideAdmin)
admin.site.register(Sarpo, SarpoAdmin)
admin.site.register(Stylist, StylistAdmin)
admin.site.register(WeddingDress, WeddingDressAdmin)
admin.site.register(Groom, GroomAdmin)
admin.site.register(GroomEssentials, GroomEssentialsAdmin)
admin.site.register(GroomStylist, GroomStylistAdmin)
admin.site.register(GroomAttire, GroomAttireAdmin)
admin.site.register(AdditionalServiceCategory, AdditionalServiceCategoryAdmin)
admin.site.register(AdditionalServiceSubcategory)