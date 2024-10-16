from rest_framework import serializers
from .models import (
    Category, UniversalCategory, UniversalSubcategory, UniversalSubSubcategory, Bride, Sarpo, Stylist, WeddingDress,
    Groom, GroomEssentials, GroomStylist, GroomAttire, AdditionalServiceCategory, AdditionalServiceSubcategory
)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UniversalCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversalCategory
        fields = '__all__'


class UniversalSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversalSubcategory
        fields = '__all__'


class UniversalSubSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversalSubSubcategory
        fields = '__all__'


class BrideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bride
        fields = '__all__'


class GroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groom
        fields = '__all__'


class AdditionalServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalServiceCategory
        fields = '__all__'


class AdditionalServiceSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalServiceSubcategory
        fields = '__all__'
