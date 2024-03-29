from django.urls import path, include
from .createWorkSpace import CreateWorkSpace, hello_world
from .createChannel import CreateChannel
from .createDocument import CreateDocument
from .createMessage import CreateMessage

from .deleteWorkSpace import DeleteWorkSpace
from .deleteChannel   import DeleteChannel
from .deleteDocument  import DeleteDocument

from .getWorkSpace import GetWorkSpace
from .getChannel import GetChannel
from .getDocument import GetDocument
from .getMessage import GetMessage

from .getAccount import GetAccount

urlpatterns = [
    path('add-channel/', CreateChannel.as_view(), name="createChannel"),
    path('add-document/', CreateDocument.as_view(), name="createDocument"),
    path('add-message/', CreateMessage.as_view(), name="createMessage"),
    path('add-work-space/', CreateWorkSpace.as_view(), name="addWorkspace"),

    path('del-channel/',    DeleteChannel.as_view(),   name="deleteChannel"),
    path('del-document/',   DeleteDocument.as_view(),  name="deleteDocument"),
    path('del-work-space/', DeleteWorkSpace.as_view(), name="deleteWorkspace"),

    path('get-channel/<str:id>/', GetChannel.as_view(), name="getChannel"),
    path('get-document/', GetDocument.as_view(), name="getDocument"),
    path('get-message/', GetMessage.as_view(),name="getMessage"),
    path('get-work-space/<str:id>/', GetWorkSpace.as_view(),name="getWorkSpace"),

    path('get-account/', GetAccount.as_view(), name="getAccount"),

    path('hello-world/', hello_world), # Just for fun
]
