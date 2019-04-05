from rest_framework import generics, permissions
from django.contrib.auth.models import User
from meetings.models import Meeting
from meetings.serializers import MeetingSerializer, UserSerializer
from meetings.permissions import IsOwner


class MeetingList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MeetingDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
            IsOwner
            )
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
