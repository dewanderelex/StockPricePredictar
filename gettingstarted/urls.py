from django.urls import path, include

from django.contrib import admin

admin.autodiscover()

from inventory.views import ReactAppView

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #url(r'^', TemplateView.as_view(template_name="index.html")),
    url(r'^', TemplateView.as_view())
]
