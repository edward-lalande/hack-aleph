from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CreateChannel(APIView):
    def post(self, request):
        channel_name = request.data.get('channel_name')
        return Response({'message': channel_name}, status=status.HTTP_200_OK)
