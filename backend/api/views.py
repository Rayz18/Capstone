from rest_framework import generics, permissions
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import CustomUser, Content, Staff, Program
from .serializers import ContentSerializer, UserSerializer, ProgramSerializer, StaffSerializer
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView

class CreateUserView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class StaffLoginView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# View to create content (only authenticated staff)
class CreateContentView(generics.CreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        staff = get_object_or_404(Staff, user=self.request.user)
        serializer.save(staff=staff)

# View to get content (for staff and display on the client side)
class ContentListView(generics.ListAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [permissions.IsAuthenticated]

class CreateProgramView(generics.CreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)  # Add parsers for handling file uploads

    def perform_create(self, serializer):
        try:
            staff = get_object_or_404(Staff, user=self.request.user)
            serializer.save(staff=staff)
        except Exception as e:
            print("Error saving program:", str(e))
            raise serializers.ValidationError("Unable to save program. Please ensure all fields are correctly provided.")

class ListProgramsView(generics.ListAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class UpdateProgramView(generics.RetrieveUpdateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]

class StaffAccountManagementView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        # Logic to list staff accounts
        staffs = Staff.objects.all()
        serializer = StaffSerializer(staffs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StaffSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class ContentModerationView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        # Logic to retrieve unapproved content
        unapproved_content = Content.objects.filter(is_approved=False)
        serializer = ContentSerializer(unapproved_content, many=True)
        return Response(serializer.data)

    def post(self, request):
        # Logic to approve content
        content_id = request.data.get("content_id")
        content = get_object_or_404(Content, id=content_id)
        content.is_approved = True
        content.save()
        return Response({"message": "Content approved."})

class DataDashboardView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        # Logic to return a data summary for admin
        return Response({"message": "Data Dashboard content."})
