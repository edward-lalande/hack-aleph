from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class DeleteWorkSpace(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        folderId = request.data.get('folder_id')
        
        conn   = sqlite3.connect("dask.db")
        cursor = conn.cursor()

        cursor.execute("DELETE FROM folders WHERE folder_id = \"" + folderId + "\"")

        conn.commit()
        cursor.close()
        return Response({'message': 'Espace supprimé avec succès!'}, status=status.HTTP_200_OK)

