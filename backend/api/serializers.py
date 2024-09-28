from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Content, Program

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'title', 'body', 'created_at', 'updated_at']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'title', 'photo', 'staff', 'created_at', 'updated_at']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
