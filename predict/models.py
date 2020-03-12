from django.db import models

# Create your models here.

class CollegeList(models.Model):
    gre_range = models.CharField(max_length=50)
    college_name = models.CharField(max_length=250)
    college_site = models.CharField(max_length=100)

    def __str__(self):
        return self.college_name
