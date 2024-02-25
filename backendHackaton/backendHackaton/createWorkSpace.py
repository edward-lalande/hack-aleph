from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
import sqlite3

def hello_world(_):
    return HttpResponse("Hello, World!", status=status.HTTP_200_OK)

class CreateWorkSpace(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        workSpaceName = "Nouvel Espace"
        cursor.execute("CREATE TABLE IF NOT EXISTS folders (owner_id TEXT, folder_id INTEGER PRIMARY KEY , name TEXT, created_at TEXT, updated_at TEXT, favorite INTEGER)")
        cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")

        for i in range (len(cursor.fetchall()) != 0):
            workSpaceName = "Nouvel Espace " + str(i)
            cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")

        cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")
        cursor.execute("INSERT INTO folders (owner_id, name, favorite) VALUES (\"" + userHash + "\", \"" + workSpaceName + "\", 0)")
        conn.commit()
        cursor.close()
        return Response({'message': 'Espace créé avec succès!'}, status=status.HTTP_200_OK)
