from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class DeleteChannel(APIView):
    def post(self, request):
        userHash  = request.data.get('user_hash')
        channelId = request.data.get('channel_id')
        
        conn   = sqlite3.connect("dask.db")
        cursor = conn.cursor()

        cursor.execute("DELETE FROM channels WHERE channel_id = \"" + channelId + "\"")

        conn.commit()
        cursor.close()
        return Response({'message': 'Channel supprimé avec succès!'}, status=status.HTTP_200_OK)


