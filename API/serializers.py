from rest_framework import serializers
from .models import Chanel


class ChanelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chanel
        fields = ['chanel_link','name', 'subscribers','pictures']