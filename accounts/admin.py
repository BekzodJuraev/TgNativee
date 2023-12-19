from django.contrib import admin

from .models import Profile,Profile_advertiser,Add_chanel,Cost_Format,Add_Reklama,Category_chanels,Message
@admin.register(Category_chanels)
class Category_chanelsAdmin(admin.ModelAdmin):
    list_display = ['name','created_at']

@admin.register(Add_Reklama)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['chanel']


@admin.register(Profile)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']

@admin.register(Cost_Format)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['add_chanel','placement_format','cost_per_format']
@admin.register(Profile_advertiser)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']

@admin.register(Message)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['sender','receiver']



class DiaryInline(admin.TabularInline):
    model = Cost_Format
    raw_id_fields = ['add_chanel']
    list_display = ['add_chanel','placement_format', 'cost_per_format']



class AddChanelAdmin(admin.ModelAdmin):
    inlines = [DiaryInline]

    list_display = ['username', 'chanel_link','get_order_info']
    raw_id_fields = ['username']



    def get_order_info(self, obj):
        # Get related CostFormat objects for the Add_chanel object
        cost_formats = obj.cost_formats.all()

        # Extract placement formats and cost per formats from related CostFormat objects
        placement_formats = ', '.join([str(cost_format.placement_format) for cost_format in cost_formats])
        cost_per_formats = ', '.join([str(cost_format.cost_per_format) for cost_format in cost_formats])

        return f"Placement Formats: {placement_formats}, Cost Per Formats: {cost_per_formats}"

    get_order_info.short_description = 'Order Info'

admin.site.register(Add_chanel, AddChanelAdmin)