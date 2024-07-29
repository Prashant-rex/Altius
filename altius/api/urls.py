from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from accounts.views import UserViewset
from tasks.views import TaskViewset

router = DefaultRouter()
router.register(r'user', UserViewset)
router.register(r'tasks', TaskViewset)

urlpatterns = [
    path('', include(router.urls)),
]