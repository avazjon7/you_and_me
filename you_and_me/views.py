from .models import (
    Bride, Groom, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory,
    AdditionalServiceCategory, AdditionalServiceSubcategory
)
from django.shortcuts import render, get_object_or_404, redirect
from .forms import AdditionalServiceCategoryForm, AdditionalServiceSubcategoryForm
from rest_framework import viewsets
from .serializers import (
    CategorySerializer, UniversalCategorySerializer, UniversalSubcategorySerializer, UniversalSubSubcategorySerializer,
    BrideSerializer, GroomSerializer, AdditionalServiceCategorySerializer, AdditionalServiceSubcategorySerializer
)
from .models import Category

# Home view
def home(request):
    brides = Bride.objects.all()
    grooms = Groom.objects.all()
    universal_categories = UniversalCategory.objects.all()

    return render(request, 'you_and_me/home.html', {
        'brides': brides,
        'grooms': grooms,
        'universal_categories': universal_categories
    })

# View for displaying bride details
def bride_detail(request, bride_id):
    bride = get_object_or_404(Bride, id=bride_id)
    sarpos = bride.sarpo.all()  # Related sarpo items for the bride
    stylists = bride.stylist.all()  # Related stylist items for the bride
    wedding_dresses = bride.wedding_dress.all()  # Wedding dress related items

    return render(request, 'you_and_me/bride_detail.html', {
        'bride': bride,
        'sarpos': sarpos,
        'stylists': stylists,
        'wedding_dresses': wedding_dresses,
    })

# View for displaying groom details
def groom_detail(request, groom_id):
    groom = get_object_or_404(Groom, id=groom_id)
    essentials = groom.essentials.all()  # Related essentials for the groom
    stylists = groom.stylist.all()  # Groom stylist items
    attires = groom.attire.all()  # Groom attire items

    return render(request, 'you_and_me/groom_detail.html', {
        'groom': groom,
        'essentials': essentials,
        'stylists': stylists,
        'attires': attires,
    })

# View for universal category details
def universal_category_detail(request, category_id):
    category = get_object_or_404(UniversalCategory, id=category_id)
    subcategories = category.subcategories.all()

    return render(request, 'you_and_me/universal_category_detail.html', {
        'category': category,
        'subcategories': subcategories,
    })

# View for universal subcategory details
def universal_subcategory_detail(request, subcategory_id):
    subcategory = get_object_or_404(UniversalSubcategory, id=subcategory_id)
    sub_subcategories = subcategory.sub_subcategories.all()

    return render(request, 'you_and_me/universal_subcategory_detail.html', {
        'subcategory': subcategory,
        'sub_subcategories': sub_subcategories,
    })

# View for displaying all additional services
def additional_services(request):
    additional_services = AdditionalServiceCategory.objects.all()
    return render(request, 'you_and_me/additional_services.html', {
        'additional_services': additional_services,
    })

# View for displaying additional service details
def additional_service_detail(request, category_id):
    category = get_object_or_404(AdditionalServiceCategory, id=category_id)
    subcategories = category.subcategories.all()

    return render(request, 'you_and_me/additional_service_detail.html', {
        'category': category,
        'subcategories': subcategories,
    })

# View to add a new additional service category
def add_additional_service_category(request):
    if request.method == 'POST':
        form = AdditionalServiceCategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('additional_services')
    else:
        form = AdditionalServiceCategoryForm()

    return render(request, 'you_and_me/add_additional_service_category.html', {'form': form})

# View to add a new additional service subcategory
def add_additional_service_subcategory(request):
    if request.method == 'POST':
        form = AdditionalServiceSubcategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('additional_services')
    else:
        form = AdditionalServiceSubcategoryForm()

    return render(request, 'you_and_me/add_additional_service_subcategory.html', {'form': form})

# ViewSets for API
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class UniversalCategoryViewSet(viewsets.ModelViewSet):
    queryset = UniversalCategory.objects.all()
    serializer_class = UniversalCategorySerializer


class UniversalSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = UniversalSubcategory.objects.all()
    serializer_class = UniversalSubcategorySerializer


class UniversalSubSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = UniversalSubSubcategory.objects.all()
    serializer_class = UniversalSubSubcategorySerializer


class BrideViewSet(viewsets.ModelViewSet):
    queryset = Bride.objects.all()
    serializer_class = BrideSerializer


class GroomViewSet(viewsets.ModelViewSet):
    queryset = Groom.objects.all()
    serializer_class = GroomSerializer


class AdditionalServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = AdditionalServiceCategory.objects.all()
    serializer_class = AdditionalServiceCategorySerializer


class AdditionalServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = AdditionalServiceSubcategory.objects.all()
    serializer_class = AdditionalServiceSubcategorySerializer
