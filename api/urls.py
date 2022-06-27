
from .views import main, RoomView, PlayerImageUpload
from django.urls import path

urlpatterns = [
    path('', main),
    path('home', main),
    path('Room', RoomView.as_view()),
    path('Upload', PlayerImageUpload.as_view()),
]