from rest_framework import serializers
from .models import Room, Player

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host' , 'guest_can_pause','votes_to_skip', 'created_at') 
        
# class PlayerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Player
#         fields = ('id', 'full_name', 'image_url')
        
class PlayerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Player
        fields = ('id', 'image')
