from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from aleph_client.commands.account import ETHAccount

class GetAccount(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, _):
        data = {"Account": ETHAccount(bytes.fromhex("b5b5f1f2a36eca7f084b94aa292b3f75704f0599fc722059835bd4bd6fb90155")).get_address() }#private_key, 'utf-8'))}
        return Response(data, status=status.HTTP_200_OK)
