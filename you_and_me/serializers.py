from rest_framework import serializers
from .models import (
    UniversalCategory, UniversalSubcategory, UniversalSubSubcategory, Bride, Groom, AdditionalServiceCategory, AdditionalServiceSubcategory, Item
)
from rest_framework import serializers
from .models import (
    UniversalCategory, UniversalSubcategory, UniversalSubSubcategory, Bride, Groom, AdditionalServiceCategory, AdditionalServiceSubcategory, Item, Category
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
    category = serializers.PrimaryKeyRelatedField(queryset=UniversalCategory.objects.all())

    class Meta:
        model = UniversalSubcategory
        fields = '__all__'


class UniversalSubSubcategorySerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubcategory.objects.all())

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
    category = serializers.PrimaryKeyRelatedField(queryset=AdditionalServiceCategory.objects.all())

    class Meta:
        model = AdditionalServiceSubcategory
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=UniversalCategory.objects.all())
    subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubcategory.objects.all())
    sub_subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubSubcategory.objects.all())
    bride = serializers.PrimaryKeyRelatedField(queryset=Bride.objects.all(), allow_null=True)
    groom = serializers.PrimaryKeyRelatedField(queryset=Groom.objects.all(), allow_null=True)

    class Meta:
        model = Item
        fields = '__all__'


class UniversalCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversalCategory
        fields = '__all__'


class UniversalSubcategorySerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=UniversalCategory.objects.all())

    class Meta:
        model = UniversalSubcategory
        fields = '__all__'


class UniversalSubSubcategorySerializer(serializers.ModelSerializer):
    subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubcategory.objects.all())

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
    category = serializers.PrimaryKeyRelatedField(queryset=AdditionalServiceCategory.objects.all())

    class Meta:
        model = AdditionalServiceSubcategory
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=UniversalCategory.objects.all())
    subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubcategory.objects.all())
    sub_subcategory = serializers.PrimaryKeyRelatedField(queryset=UniversalSubSubcategory.objects.all())
    bride = serializers.PrimaryKeyRelatedField(queryset=Bride.objects.all(), allow_null=True)
    groom = serializers.PrimaryKeyRelatedField(queryset=Groom.objects.all(), allow_null=True)

    class Meta:
        model = Item
        fields = '__all__'
