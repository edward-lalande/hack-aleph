from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CreateDocument(APIView):
    def post(self, request):
        document_name = request.data.get('document_name')
        return Response({'message': document_name}, status=status.HTTP_200_OK)
