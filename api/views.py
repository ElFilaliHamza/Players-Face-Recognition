from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from .models import Room, Player
from .serializer import RoomSerializer, PlayerSerializer
from rest_framework import permissions,status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from .Recognition.Players import *
# Create your views here.


def main(request):
    return HttpResponse("Afin a5ona!!")


class RoomView(generics.ListAPIView): # generics.CreateAPIView
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
    
class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        
class PlayerImageUpload(APIView):
    # permission_classes = (IsAuthenticated)
    parser_classes = (FormParser, MultiPartParser)
    # authentication_classes = (TokenAuthentication,)

    def post(self, request, format=None):
        print("--------------------------------------------------\n")
        print(request.data)
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            img_path = serializer.data['image']
            print(img_path)
            prediction = predict(img_path)
            print(prediction)
            return Response(data=prediction, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
