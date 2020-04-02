from django.urls import path
from api.views import companies, vacancies, company, vacancy,company_vacancies, vacancies_top

urlpatterns = [
    path('companies', companies),
    path('companies/<int:id>/', company),
    path('companies/<int:id>/vacancies', company_vacancies),
    path('vacancies', vacancies),
    path('vacancies/top_ten', vacancies_top),
    path('vacancies/<int:id>/', vacancy)
]