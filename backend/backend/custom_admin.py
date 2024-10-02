# custom_admin.py in the backend directory
from django.contrib.admin import AdminSite
from django.urls import path
from django.shortcuts import render
from api.models import Staff, Content
from django.db.models import Count
from api.admin import StaffAdmin, ContentAdmin  # Import existing admin classes
import matplotlib.pyplot as plt
import io
import base64
from django.http import HttpResponse

class CustomAdminSite(AdminSite):
    site_header = 'Capstone Administration'
    site_title = 'Capstone Admin Panel'
    index_title = 'Data Dashboard'

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('dashboard/', self.admin_view(self.dashboard_view), name="dashboard"),
        ]
        return custom_urls + urls

    def dashboard_view(self, request):
        # Gathering data for the dashboard
        total_staff = Staff.objects.count()
        total_content = Content.objects.count()
        content_by_staff = Content.objects.values('staff__user__username').annotate(count=Count('id'))

        # Creating a simple chart
        staff_usernames = [entry['staff__user__username'] for entry in content_by_staff]
        content_counts = [entry['count'] for entry in content_by_staff]

        plt.figure(figsize=(10, 5))
        plt.bar(staff_usernames, content_counts, color='skyblue')
        plt.xlabel('Staff Username')
        plt.ylabel('Number of Content Entries')
        plt.title('Content Entries by Staff')

        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        image_base64 = base64.b64encode(buf.getvalue()).decode('utf-8')
        buf.close()

        # Passing data to the template
        context = dict(
            self.each_context(request),
            total_staff=total_staff,
            total_content=total_content,
            content_by_staff=content_by_staff,
            chart=image_base64,
        )
        return render(request, 'admin/dashboard.html', context)

custom_admin_site = CustomAdminSite(name='custom_admin')

custom_admin_site.register(Staff, StaffAdmin)
custom_admin_site.register(Content, ContentAdmin)