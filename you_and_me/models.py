from django.db import models

# New Category Model
class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Category"


class UniversalCategory(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "UniversalCategory"
        verbose_name_plural = "UniversalCategory"



class UniversalSubcategory(models.Model):
    category = models.ForeignKey(UniversalCategory, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='subcategories/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "UniversalSubCategory"
        verbose_name_plural = "UniversalSubCategory"


class UniversalSubSubcategory(models.Model):
    subcategory = models.ForeignKey(UniversalSubcategory, on_delete=models.CASCADE, related_name='sub_subcategories')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='sub_subcategories/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "UniversalCategory"
        verbose_name_plural = "UniversalCategory"


class Bride(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='brides/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Bride"
        verbose_name_plural = "Bride"


class Sarpo(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='sarpo')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='sarpo/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "Sarpo"
        verbose_name_plural = "Sarpo"

class Stylist(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='stylist')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='stylists/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "Stylist"
        verbose_name_plural = "Stylist"

class WeddingDress(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='wedding_dress')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='wedding_dresses/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "WeddingDress"
        verbose_name_plural = "WeddingDress"


class Groom(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='grooms/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Groom"
        verbose_name_plural = "Groom"


class GroomEssentials(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='essentials')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='groom_essentials/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "GroomEssentials"
        verbose_name_plural = "GroomEssentials"

class GroomStylist(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='stylist')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='groom_stylists/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "GroomStylist"
        verbose_name_plural = "GroomStylist"


class GroomAttire(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='attire')
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='groom_attire/', null=True, blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "GroomAttire"
        verbose_name_plural = "GroomAttire"


# Main category for Additional Services (e.g., Honeymoon, Cakes, etc.)
class AdditionalServiceCategory(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='additional_services/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "AdditionalServiceCategory"
        verbose_name_plural = "AdditionalServiceCategory"


class AdditionalServiceSubcategory(models.Model):
    category = models.ForeignKey(AdditionalServiceCategory, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='additional_service_subcategories/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "AdditionalServiceSubcategory"
        verbose_name_plural = "AdditionalServiceSubcategory"

    def create_additional_services(self):
        honeymoon = AdditionalServiceCategory.objects.create(name="Honeymoon")
        cakes = AdditionalServiceCategory.objects.create(name="Cakes")
        registry_office = AdditionalServiceCategory.objects.create(name="Registry Office")
        collection = AdditionalServiceCategory.objects.create(name="Collection")
        AdditionalServiceSubcategory.objects.create(category=collection, name="Drinks")
        AdditionalServiceSubcategory.objects.create(category=collection, name="Fruits")
        AdditionalServiceSubcategory.objects.create(category=collection, name="Perfumes")
        AdditionalServiceSubcategory.objects.create(category=collection, name="Sweets")



class Payment(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('created', 'Created'),
        ('failed', 'Failed'),
        ('completed', 'Completed'),
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    transaction_id = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment #{self.id} - {self.status}"

# Updated Item model to fit with existing related models
class Item(models.Model):
    category = models.ForeignKey(UniversalCategory, on_delete=models.CASCADE, related_name='items', null=True, blank=True)
    subcategory = models.ForeignKey(UniversalSubcategory, on_delete=models.CASCADE, related_name='items', null=True, blank=True)
    sub_subcategory = models.ForeignKey(UniversalSubSubcategory, on_delete=models.CASCADE, related_name='items', null=True, blank=True)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    product = models.CharField(max_length=50)
    company_name = models.CharField(max_length=100)
    company_status = models.CharField(max_length=50, choices=[('approved', 'Approved'), ('pending', 'Pending')])
    price = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10)
    discount = models.PositiveIntegerField()
    tag = models.CharField(max_length=50)
    feedback_count = models.PositiveIntegerField()
    feedback_rating = models.FloatField()
    image = models.ImageField(upload_to='items/', null=True, blank=True)

    def __str__(self):
        return f"{self.product} ({self.company_name})"

    class Meta:
        verbose_name = "Item"
        verbose_name_plural = "Items"
