from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class CreateDocument(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        folderId = request.data.get('folder_id')
        docType  = request.data.get('document_type')
        docHash  = request.data.get('document_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()

        cursor.execute("INSERT INTO documents (owner_id, folder_id, doc_type, doc_id) VALUES (\""
                       + userHash + "\", \""
                       + folderId + "\", \""
                       + docType  + "\", \""
                       + docHash  + "\")")
        cursor.close()
        return Response({'message': document_name}, status=status.HTTP_200_OK)
