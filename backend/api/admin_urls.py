# api/admin_urls.py
from django.urls import path
from .views import (StaffAccountManagementView, ContentModerationView, DataDashboardView)

urlpatterns = [
    path("staff-management/", StaffAccountManagementView.as_view(), name="staff_account_management"),
    path("staff-management/<int:pk>/", StaffAccountManagementView.as_view(), name="delete_staff"),
    path("content-moderation/", ContentModerationView.as_view(), name="content_moderation"),
    path("data-dashboard/", DataDashboardView.as_view(), name="data_dashboard"),
]
