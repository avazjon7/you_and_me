from django.contrib import admin
from django.contrib.auth.models import Group
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export.formats.base_formats import XLSX

from .models import (
    Category, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory, Bride, Sarpo, Stylist, WeddingDress,
    Groom, GroomEssentials, GroomStylist, GroomAttire, AdditionalServiceCategory, AdditionalServiceSubcategory
)

# Register models with inlines for subcategories in admin
class SarpoInline(admin.TabularInline):
    model = Sarpo
    extra = 1


class StylistInline(admin.TabularInline):
    model = Stylist
    extra = 1


class WeddingDressInline(admin.TabularInline):
    model = WeddingDress
    extra = 1


class BrideAdmin(ImportExportModelAdmin):
    inlines = [SarpoInline, StylistInline, WeddingDressInline]
    list_display = ['name']
    search_fields = ['name']
    formats = ImportExportModelAdmin.formats  # Добавляем возможность экспорта в XLSX


class GroomEssentialsInline(admin.TabularInline):
    model = GroomEssentials
    extra = 1


class GroomStylistInline(admin.TabularInline):
    model = GroomStylist
    extra = 1


class GroomAttireInline(admin.TabularInline):
    model = GroomAttire
    extra = 1


class GroomAdmin(ImportExportModelAdmin):
    inlines = [GroomEssentialsInline, GroomStylistInline, GroomAttireInline]
    list_display = ['name']
    search_fields = ['name']
    formats = ImportExportModelAdmin.formats  # Добавляем возможность экспорта в XLSX


class UniversalSubcategoryInline(admin.TabularInline):
    model = UniversalSubcategory
    extra = 1


class UniversalCategoryAdmin(ImportExportModelAdmin):
    inlines = [UniversalSubcategoryInline]
    list_display = ['name']
    search_fields = ['name']
    def get_export_formats(self):
        formats = super().get_export_formats()
        formats.append(XLSX)
        return formats  # Добавляем возможность экспорта в XLSX


class UniversalSubSubcategoryInline(admin.TabularInline):
    model = UniversalSubSubcategory
    extra = 1


class UniversalSubcategoryAdmin(ImportExportModelAdmin):
    inlines = [UniversalSubSubcategoryInline]
    list_display = ['category', 'name']
    search_fields = ['category__name', 'name']
    list_filter = ['category']
    def get_export_formats(self):
        formats = super().get_export_formats()
        formats.append(XLSX)
        return formats  # Добавляем возможность экспорта в XLSX


# Registering models
admin.site.register(Bride, BrideAdmin)
admin.site.register(Groom, GroomAdmin)
admin.site.register(UniversalCategory, UniversalCategoryAdmin)
admin.site.unregister(Group)
