from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class GetWorkSpace(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request):
        userHash = request.data.get('user_hash')
        print("args: ", request)
        conn = sqlite3.connect("dasck.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM folders WHERE owner_id=\"" + userHash + "\"")

        return Response(cursor.fetchall(), status=status.HTTP_200_OK)
