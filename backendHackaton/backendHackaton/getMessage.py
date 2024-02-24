from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status

class GetMessage(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, _):
        data = {"Message_name": "message_name"}
        return Response(data, status=status.HTTP_200_OK)