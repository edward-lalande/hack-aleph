from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class CreateMessage(APIView):
    def post(self, request):
        userHash  = request.data.get('user_hash')
        channelId = request.data.get('channel_id')
        msgHash   = request.data.get('message_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()

        cursor.execute("INSERT INTO messages (owner_id, folder_id, doc_type, doc_id) VALUES (\""
                       + userHash + "\", \""
                       + folderId + "\", \""
                       + docType  + "\", \""
                       + docHash  + "\")")
        cursor.close()
        return Response({'message': message}, status=status.HTTP_200_OK)
