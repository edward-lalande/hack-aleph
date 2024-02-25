from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class CreateChannel(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        channelName = "Nouveau Canal"
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM channels WHERE name=\"" + channelName + "\"")

        for i in range (len(cursor.fetchall()) != 0):
            workSpaceName = "Nouveau Canal" + str(i)
            cursor.execute("SELECT * FROM channels WHERE name=\"" + channelName + "\"")

        cursor.execute("SELECT * FROM channels WHERE name=\"" + channelName + "\"")
        cursor.execute("INSERT INTO channels (owner_id, name) VALUES (\"" + userHash + "\", \"" + channelName"\")")
        cursor.close()
        return Response({'message': channel_name}, status=status.HTTP_200_OK)
