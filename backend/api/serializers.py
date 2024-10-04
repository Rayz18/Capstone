# api/serializers.py

from rest_framework import serializers
from .models import CustomUser, Content, Program, Staff

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ["id", "email", "username", "password", "is_staff", "is_superuser"]
        extra_kwargs = {
            "is_staff": {"read_only": True},
            "is_superuser": {"read_only": True}
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Staff
        fields = ["id", "user", "position"]

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = CustomUser.objects.create_user(**user_data)
        staff = Staff.objects.create(user=user, **validated_data)
        return staff

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'title', 'body', 'created_at', 'updated_at', 'is_approved', 'staff']
        read_only_fields = ['created_at', 'updated_at', 'is_approved']

class ProgramSerializer(serializers.ModelSerializer):
    staff = serializers.PrimaryKeyRelatedField(queryset=Staff.objects.all())

    class Meta:
        model = Program
        fields = ['id', 'title', 'photo', 'created_at', 'updated_at', 'staff']
        read_only_fields = ['created_at', 'updated_at']

    def create(self, validated_data):
        return Program.objects.create(**validated_data)
