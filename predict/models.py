from django.db import models

# Create your models here.

class Feedback(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField()
    feedBack = models.TextField()

    def __str__(self):
        return self.firstName+" "+self.lastName