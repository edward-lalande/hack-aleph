from django.urls import path, include
from .views import CreateWorkSpace, hello_world

urlpatterns = [
    path('add-work-space/', CreateWorkSpace.as_view(), name='addWorkspace'),
    path('hello-world/', hello_world, name='hello_world'),
]
