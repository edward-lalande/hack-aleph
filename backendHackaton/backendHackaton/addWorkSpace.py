import os
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

class WorkSpace(models.Model):
    nom = models.CharField(max_length=255)

    def __str__(self):
        return self.nom

@receiver(post_save, sender=WorkSpace)
def createWorkSpaceFolder(sender, instance, **kwargs):
    workspace_path = os.path.join("../", instance.nom)
    
    if not os.path.exists(workspace_path):
        os.makedirs(workspace_path)
