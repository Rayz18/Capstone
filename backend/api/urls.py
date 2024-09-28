from django.urls import path
from .views import StaffLoginView, CreateContentView, ContentListView, ListProgramsView, CreateProgramView, UpdateProgramView

urlpatterns = [
    path('staff/login/', StaffLoginView.as_view(), name='staff_login'),
    path('content/create/', CreateContentView.as_view(), name='create_content'),
    path('content/', ContentListView.as_view(), name='list_content'),
    path('programs/', ListProgramsView.as_view(), name='list_programs'),
    path('programs/create/', CreateProgramView.as_view(), name='create_program'),
    path('programs/<int:pk>/edit/', UpdateProgramView.as_view(), name='edit_program'),
]
