from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class GetWorkSpace(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request, id):
        userHash = id
        print("args: ", request)
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM folders WHERE owner_id=\"" + userHash + "\"")

        return Response(cursor.fetchall(), status=status.HTTP_200_OK)
