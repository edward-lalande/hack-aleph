from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sqlite3

class CreateChannel(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        channelName = "Nouveau Channel"
        cursor.execute("CREATE TABLE IF NOT EXISTS channels (owner_id TEXT, channel_id INTEGER PRIMARY KEY , name TEXT, created_at TEXT, updated_at TEXT)")

        db = cursor.execute("SELECT * FROM channels WHERE name LIKE '%"+channelName+"%'").fetchall()

        i = len(db)
        if i > 0:
            channelName = "Nouveau Channel " + str(i)

        cursor.execute("INSERT INTO channels (owner_id, name) VALUES (\"" + userHash + "\", \"" + channelName + "\")")
        conn.commit()
        cursor.close()
        return Response({'message': 'Channel créé avec succès!'}, status=status.HTTP_200_OK)

