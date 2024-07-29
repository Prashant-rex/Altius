from django.db import models
from accounts.models import User

# Create your models here.

class Tasks(models.Model):
    created_by = models.ForeignKey(User, blank=False, related_name='created_task', null=False, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(User, blank=False, related_name='assigned_task', null=False, on_delete=models.CASCADE)
    assigned_by = models.ForeignKey(User, blank=False, null=False, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False, db_index=True)
    description = models.TextField()
    is_completed = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

