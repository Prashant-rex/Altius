from rest_framework import viewsets
from rest_framework.decorators import action
from accounts.models import User
from accounts.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        try:
            user = User.objects.filter(username=username).last()
            if not user:
                return Response('User Does Not Exist', status=status.HTTP_404_NOT_FOUND)
        
            if password != user.password:
                return Response('Wrong Password', status=status.HTTP_401_UNAUTHORIZED)

            return Response("Login Successfull", status=status.HTTP_200_OK)
        
        except:
            return Response("Something Went Wrong", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


