from django.urls import path
from .views import StaffLoginView, CreateContentView, ContentListView

urlpatterns = [
    path('staff/login/', StaffLoginView.as_view(), name='staff_login'),
    path('content/create/', CreateContentView.as_view(), name='create_content'),
    path('content/', ContentListView.as_view(), name='list_content'),
]
