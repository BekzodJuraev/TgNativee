from django.shortcuts import render
from .serializers import ChanelSerializer
from rest_framework.views import APIView
from .models import Chanel
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class ChanelAPI(APIView):
    def get(self, request):
        chanel = Chanel.objects.all()
        serializer = ChanelSerializer(chanel, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ChanelSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            subscribers=serializer.validated_data['subscribers']
            pictures=serializer.validated_data['pictures']
            serializer.save()
            return Response({'serializer': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)