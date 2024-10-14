from .models import Bride, Groom, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory
from django.shortcuts import render, get_object_or_404
from .models import AdditionalServiceCategory, AdditionalServiceSubcategory

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


def universal_category_detail(request, category_id):
    category = get_object_or_404(UniversalCategory, id=category_id)
    subcategories = category.subcategories.all()

    return render(request, 'you_and_me/universal_category_detail.html', {
        'category': category,
        'subcategories': subcategories,
    })


def universal_subcategory_detail(request, subcategory_id):
    subcategory = get_object_or_404(UniversalSubcategory, id=subcategory_id)
    sub_subcategories = subcategory.sub_subcategories.all()

    return render(request, 'you_and_me/universal_subcategory_detail.html', {
        'subcategory': subcategory,
        'sub_subcategories': sub_subcategories,
    })

def additional_services(request):
    additional_services = AdditionalServiceCategory.objects.all()
    return render(request, 'you_and_me/additional_services.html', {
        'additional_services': additional_services,
    })

# View to display details of a specific Additional Service category and its subcategories
def additional_service_detail(request, category_id):
    category = get_object_or_404(AdditionalServiceCategory, id=category_id)
    subcategories = category.subcategories.all()

    return render(request, 'you_and_me/additional_service_detail.html', {
        'category': category,
        'subcategories': subcategories,
    })