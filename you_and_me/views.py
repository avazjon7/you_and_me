from .models import (
    Bride, Groom, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory,
    AdditionalServiceCategory, AdditionalServiceSubcategory, Payment, Item
)
from django.shortcuts import render, get_object_or_404, redirect
from .forms import AdditionalServiceCategoryForm, AdditionalServiceSubcategoryForm
from rest_framework import viewsets
from .serializers import (
    CategorySerializer, UniversalCategorySerializer, UniversalSubcategorySerializer, UniversalSubSubcategorySerializer,
    BrideSerializer, GroomSerializer, AdditionalServiceCategorySerializer, AdditionalServiceSubcategorySerializer,
    ItemSerializer
)
from .models import Category
from django.conf import settings
import requests

# Payme API URL
PAYME_API_URL = "https://checkout.paycom.uz/api"


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
    else:  # GET request
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


# View to initiate payment with Payme

# def payme_callback(request):
#     if request.method == 'POST':
#         data = request.POST
#         transaction_id = data.get('account[order_id]')
#         payment = Payment.objects.get(transaction_id=transaction_id)
#         payment.status = 'completed'
#         payment.save()
#         return render(request, 'you_and_me/payment_completed.html')
#     return render(request, 'you_and_me/payment_failed.html', {'error': 'Invalid request.'})

def initiate_payment(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        if not amount:
            return render(request, 'you_and_me/initiate_payment.html', {'error': 'Amount is required.'})

        # Create a payment object with status 'pending'
        payment = Payment.objects.create(amount=amount, status='pending')

        headers = {
            'X-Auth': settings.PAYME_KEY_ID,
            'Content-Type': 'application/json',
        }

        payload = {
            'method': 'CreateTransaction',
            'params': {
                'amount': int(float(amount) * 100),  # в тийинах
                'account': {
                    'order_id': payment.id
                }
            }
        }

        response = requests.post(PAYME_API_URL, json=payload, headers=headers)

        if response.status_code == 200:
            data = response.json()
            if 'result' in data:
                transaction_id = data['result']['transaction']
                payment.transaction_id = transaction_id
                payment.status = 'created'
                payment.save()
                return redirect(data['result']['pay_url'])
            else:
                # Handle error from Payme API
                payment.status = 'failed'
                payment.save()
                return render(request, 'you_and_me/payment_failed.html', {'error': data.get('error', {}).get('message', 'Unknown error occurred.')})
        else:
            return render(request, 'you_and_me/payment_failed.html', {'error': 'Failed to initiate payment. Please try again later.'})

    return render(request, 'you_and_me/initiate_payment.html')


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


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class AdditionalServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = AdditionalServiceCategory.objects.all()
    serializer_class = AdditionalServiceCategorySerializer


class AdditionalServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = AdditionalServiceSubcategory.objects.all()
    serializer_class = AdditionalServiceSubcategorySerializer
