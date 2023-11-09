from django.contrib import admin
from .models import Profile,Profile_advertiser,Add_chanel,Cost_Format
@admin.register(Profile)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']

@admin.register(Cost_Format)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['add_chanel','placement_format','cost_per_format']
@admin.register(Profile_advertiser)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']





class DiaryInline(admin.TabularInline):
    model = Cost_Format
    raw_id_fields = ['add_chanel']
    list_display = ['add_chanel','placement_format', 'cost_per_format']


@admin.register(Add_chanel)
class ChanelAdvertiser(admin.ModelAdmin):
    inlines = [DiaryInline]

    list_display = ['username', 'chanel_link']
    raw_id_fields = ['username']