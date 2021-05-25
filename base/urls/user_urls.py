from django.urls import path
from base.views import users_views as views



urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('register/', views.registerUser, name="register-user"),
    path('', views.getUsers, name="users"),
    path('<str:pk>/', views.getUserById, name="user"),
    path('update/<str:pk>/', views.updateUser, name="user-update"),
    path('delete/<str:pk>/', views.deleteUser, name="user-delete"),

]