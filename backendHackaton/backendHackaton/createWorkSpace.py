from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from .addWorkSpace import WorkSpace

def hello_world(_):
    return HttpResponse("Hello, World!", status=status.HTTP_200_OK)

class CreateWorkSpace(APIView):
    def post(self, request):
        nom_espace = request.data.get('folder_name')

        espace = WorkSpace(nom=nom_espace)
        espace.save()

        return Response({'message': 'Espace créé avec succès!'}, status=status.HTTP_200_OK)
