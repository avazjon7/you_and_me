from django import forms
from .models import AdditionalServiceCategory, AdditionalServiceSubcategory

class AdditionalServiceCategoryForm(forms.ModelForm):
    class Meta:
        model = AdditionalServiceCategory
        fields = ['name']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Введите название категории'}),
        }

class AdditionalServiceSubcategoryForm(forms.ModelForm):
    class Meta:
        model = AdditionalServiceSubcategory
        fields = ['category', 'name']
        widgets = {
            'category': forms.Select(attrs={'class': 'form-control'}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Введите название подкатегории'}),
        }
