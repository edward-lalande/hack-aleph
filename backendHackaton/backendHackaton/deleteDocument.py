from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class DeleteDocument(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        docId    = request.data.get('doc_id')
        
        conn   = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        cursor.execute("DELETE FROM documents WHERE doc_id = \"" + docId + "\"")

        conn.commit()
        cursor.close()
        return Response({'message': ""+document_name+" supprimé avec succès.'}, status=status.HTTP_200_OK)

