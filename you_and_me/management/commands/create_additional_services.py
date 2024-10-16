from django.core.management.base import BaseCommand
from you_and_me.models import AdditionalServiceCategory, AdditionalServiceSubcategory

class Command(BaseCommand):
    help = 'Create initial additional services and subcategories'

    def handle(self, *args, **kwargs):
        def create_additional_services():
            honeymoon = AdditionalServiceCategory.objects.create(name="Медовый месяц")
            cakes = AdditionalServiceCategory.objects.create(name="Торты")
            registry_office = AdditionalServiceCategory.objects.create(name="ЗАГС")
            family_books = AdditionalServiceCategory.objects.create(name="Книги о семье")
            chef = AdditionalServiceCategory.objects.create(name="Повар")
            waiters = AdditionalServiceCategory.objects.create(name="Официанты")
            security = AdditionalServiceCategory.objects.create(name="Охрана")
            butcher = AdditionalServiceCategory.objects.create(name="Мясник")
            dishwashers = AdditionalServiceCategory.objects.create(name="Посуда мойки")
            table_setters = AdditionalServiceCategory.objects.create(name="Накрыватели столов")
            breads = AdditionalServiceCategory.objects.create(name="Хлеба")
            dishes = AdditionalServiceCategory.objects.create(name="Блюда")
            couriers = AdditionalServiceCategory.objects.create(name="Курьеры")
            carpenters = AdditionalServiceCategory.objects.create(name="Плотники")
            nikkah_ceremony = AdditionalServiceCategory.objects.create(name="Проведение никаха")

            # Коллекция подкатегорий
            collection = AdditionalServiceCategory.objects.create(name="Коллекция")
            AdditionalServiceSubcategory.objects.create(category=collection, name="Напитки")
            AdditionalServiceSubcategory.objects.create(category=collection, name="Фрукты")
            AdditionalServiceSubcategory.objects.create(category=collection, name="Парфюмерия")
            AdditionalServiceSubcategory.objects.create(category=collection, name="Сладости")

        create_additional_services()
        self.stdout.write(self.style.SUCCESS('Additional services created successfully'))
