from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CreateMessage(APIView):
    def post(self, request):
        message = request.data.get('message')
        return Response({'message': message}, status=status.HTTP_200_OK)
