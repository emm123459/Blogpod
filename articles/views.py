from django.shortcuts import render, redirect
from .models import Article, Event
from .forms import ArticleForm


def home_page(request):
    latest_article = Article.objects.order_by('-created_at').first()
    other_articles = Article.objects.exclude(id=latest_article.id).order_by('-created_at')[:10] if latest_article else []
    articles = Article.objects.all().order_by('-id')
    events = Event.objects.all().order_by('-created_at')

    return render(request, 'articles/home.html', {
        'latest_article': latest_article,
        'other_articles': other_articles,
        'articles': articles,
        'events': events,
    })


def insights(request):
    articles = Article.objects.all().order_by('-created_at')
    return render(request, "articles/insights.html", {"articles": articles})


def create_article(request):
    if request.method == "POST":
        form = ArticleForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  
            return redirect("home")
    else:
        form = ArticleForm()
    return render(request, "articles/create_article.html", {"form": form})


def events(request):
    events = Event.objects.order_by("-created_at")
    return render(request, "articles/events.html", {"events": events})
