from django.contrib import admin
from .models import Article, Event

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")
    search_fields = ("title", "content")

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "tag", "created_at")
    search_fields = ("title", "description", "tag")




