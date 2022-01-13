from django.contrib import admin
from .models import Position

# admin.site.site_url = ''
# admin.site.site_url = 'http://localhost:8000/employee/list'
admin.site.site_url = '/employee'

# Register your models here.
admin.site.register(Position)
