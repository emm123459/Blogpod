from django.urls import path
from . import views

urlpatterns = [
    path("", views.home_page, name="home"),
    path("insights/", views.insights, name="insights"),
    path("events/", views.events, name="events"),
    path("create/", views.create_article, name="create_article"),
]



