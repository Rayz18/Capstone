from django.urls import path
from .views import StaffLoginView, CreateContentView, ContentListView, ListProgramsView, CreateProgramView, UpdateProgramView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('staff/login/', StaffLoginView.as_view(), name='staff_login'),
    path('content/create/', CreateContentView.as_view(), name='create_content'),
    path('content/', ContentListView.as_view(), name='list_content'),
    path('programs/', ListProgramsView.as_view(), name='list_programs'),
    path('programs/create/', CreateProgramView.as_view(), name='create_program'),
    path('programs/<int:pk>/edit/', UpdateProgramView.as_view(), name='edit_program'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
