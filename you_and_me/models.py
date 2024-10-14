from django.db import models

class UniversalCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class UniversalSubcategory(models.Model):
    category = models.ForeignKey(UniversalCategory, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class UniversalSubSubcategory(models.Model):
    subcategory = models.ForeignKey(UniversalSubcategory, on_delete=models.CASCADE, related_name='sub_subcategories')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



def create_universal_categories():
    accessories = UniversalCategory.objects.create(name="Accessories")
    jewelry = UniversalSubcategory.objects.create(category=accessories, name="Jewelry")
    UniversalSubSubcategory.objects.create(subcategory=jewelry, name="Wedding Rings")

    photo_video = UniversalCategory.objects.create(name="Photo and Video")

    decor = UniversalCategory.objects.create(name="Decor")

    planning = UniversalCategory.objects.create(name="Wedding Planning and Organization")
    event_companies = UniversalSubcategory.objects.create(category=planning, name="Event Companies")
    catering = UniversalSubcategory.objects.create(category=planning, name="Catering Companies")

    locations = UniversalCategory.objects.create(name="Ceremony Locations")
    restaurants = UniversalSubcategory.objects.create(category=locations, name="Restaurants")
    UniversalSubSubcategory.objects.create(subcategory=restaurants, name="Wedding Halls")
    UniversalSubSubcategory.objects.create(subcategory=restaurants, name="Cafes")
    UniversalSubSubcategory.objects.create(subcategory=restaurants, name="Locations for Love Stories")

    invitations = UniversalCategory.objects.create(name="Invitations")


    transport = UniversalCategory.objects.create(name="Transport")
    transport_sarpo = UniversalSubcategory.objects.create(category=transport, name="Transport for Sarpo")
    bride_groom_transport = UniversalSubcategory.objects.create(category=transport, name="For the Bride and Groom")
    friends_transport = UniversalSubcategory.objects.create(category=transport, name="For Friends and Guests")
    large_group_transport = UniversalSubcategory.objects.create(category=transport, name="For Large Groups")
    misc_transport = UniversalSubcategory.objects.create(category=transport, name="Miscellaneous and Furniture")

    flowers = UniversalCategory.objects.create(name="Flowers")
    bride_flowers = UniversalSubcategory.objects.create(category=flowers, name="Bride’s Flowers")
    UniversalSubSubcategory.objects.create(subcategory=bride_flowers, name="Bouquets")

    musicians = UniversalCategory.objects.create(name="Musicians")
    tamada = UniversalSubcategory.objects.create(category=musicians, name="Toastmaster (Tamada)")
    artists = UniversalSubcategory.objects.create(category=musicians, name="Artists")
    musicians_sub = UniversalSubcategory.objects.create(category=musicians, name="Musicians")
    dancers = UniversalSubcategory.objects.create(category=musicians, name="Dancers")
    show = UniversalSubcategory.objects.create(category=musicians, name="Show")
    dj = UniversalSubcategory.objects.create(category=musicians, name="DJ")
    kelin_salom = UniversalSubcategory.objects.create(category=musicians, name="Kelin Salom")

    gifts = UniversalCategory.objects.create(name="Gifts")

    table_decoration = UniversalCategory.objects.create(name="Table Decoration")
    meats = UniversalSubcategory.objects.create(category=table_decoration, name="Meat Dishes")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Fruits")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Berries")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Dry Products")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Salads")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Cheese Assortment")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Seafood")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Drinks")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Sweets")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Pickles")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Preserves")
    UniversalSubSubcategory.objects.create(subcategory=meats, name="Pastries")



class Bride(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Sarpo(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='sarpo')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class Stylist(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='stylist')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class WeddingDress(models.Model):
    bride = models.ForeignKey(Bride, on_delete=models.CASCADE, related_name='wedding_dress')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class Groom(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class GroomEssentials(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='essentials')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class GroomStylist(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='stylist')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category



class GroomAttire(models.Model):
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE, related_name='attire')
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category
