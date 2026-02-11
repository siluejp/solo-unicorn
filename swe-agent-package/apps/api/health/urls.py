from django.urls import path

from .views import health_view, top_access_view

urlpatterns = [
    path("health/", health_view, name="health"),
    path("top-access/", top_access_view, name="top-access"),
]
