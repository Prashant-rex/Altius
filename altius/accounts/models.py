from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50, blank=False, null=False, unique=True)
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    email = models.EmailField()
    password = models.CharField(max_length=50, blank=False, null=False)
    dob = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.username
