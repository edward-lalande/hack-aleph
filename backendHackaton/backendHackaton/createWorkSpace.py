from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from .addWorkSpace import WorkSpace
from .db import Database, datab
import sqlite3

def hello_world(_):
    return HttpResponse("Hello, World!", status=status.HTTP_200_OK)

class CreateWorkSpace(APIView):
    def post(self, request):
        userHash = request.data.get('user_hash')
        
        conn = sqlite3.connect("dask.db")
        cursor = conn.cursor()
        workSpaceName = "Nouvel Espace"
        cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")

        for i in range (len(cursor.fetchall()) != 0):
            workSpaceName = "Nouvel Espace " + str(i)
            cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")

        cursor.execute("SELECT * FROM folders WHERE name=\"" + workSpaceName + "\"")
        cursor.execute("INSERT INTO folders (owner_id, name, favorite) VALUES (\"" + userHash + "\", \"" + workSpaceName + "\", 0)")
        # datab.add_folder({userHash, workSpaceName, 0})
        cursor.close()
        return Response({'message': 'Espace créé avec succès!'}, status=status.HTTP_200_OK)
