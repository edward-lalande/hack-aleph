from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class GetDocument(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, _):
        data = {"document_name": "document_name"}
        userHash  = request.data.get('user_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM documents WHERE owner_id=\"" + userHash + "\"")

        cursor.close()
        return Response(data, status=status.HTTP_200_OK)
