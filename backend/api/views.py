from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Content, Staff, Program
from .serializers import ContentSerializer, UserSerializer, ProgramSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework import serializers
from django.shortcuts import get_object_or_404

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Staff login view (you can reuse the existing JWT token view)
class StaffLoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# View to create content (only authenticated staff)
class CreateContentView(generics.CreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(staff=self.request.user.staff)

# View to get content (for staff and display on the client side)
class ContentListView(generics.ListAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsAuthenticated]

class CreateProgramView(generics.CreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)  # Add parsers for handling file uploads

    def perform_create(self, serializer):
        try:
            staff = get_object_or_404(Staff, user=self.request.user)
            print("Staff found for user:", staff)
            serializer.save(staff=staff)
        except Exception as e:
            print("Error saving program:", str(e))
            raise serializers.ValidationError("Error during saving program: {str(e)}")

class ListProgramsView(generics.ListAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class UpdateProgramView(generics.RetrieveUpdateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [IsAuthenticated]
