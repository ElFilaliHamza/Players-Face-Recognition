from django.db import models
import string
import random

def generate_unique_code():
    length = 10
    
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8,default='',unique=True)
    host = models.CharField(max_length=8, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
  
    
# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Player(models.Model):
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)

