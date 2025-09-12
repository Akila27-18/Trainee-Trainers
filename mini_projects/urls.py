from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MiniProjectViewSet

router = DefaultRouter()
router.register(r'projects', MiniProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
]
