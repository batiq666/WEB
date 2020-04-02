from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse

def companies(request):
    companies_list = Company.objects.all()
    companies_list_json = [company.to_json() for company in companies_list]
    return JsonResponse(companies_list_json, safe=False)

def vacancies(request):
    vacancies_list = Vacancy.objects.all()
    vacancies_list_json = [vacancy.to_json() for vacancy in vacancies_list]
    return JsonResponse(vacancies_list_json, safe=False)

def company(request, id):
    companies_list = Company.objects.all()
    for company in companies_list:
        if company.id == id:
            return JsonResponse(company.to_json(), safe=False)

def vacancy(request, id):
    vacancies_list = Vacancy.objects.all()
    for vacancy in vacancies_list:
        if vacancy.id == id:
            return JsonResponse(vacancy.to_json(), safe=False)

def company_vacancies(request, id):
    vacancies_list = Vacancy.objects.all()
    vacancies = []
    for vacancy in vacancies_list:
        if vacancy.company.id == id:
            vacancies.append(vacancy.to_json())
    return JsonResponse(vacancies, safe=False)

def vacancies_top(request):
    vacancies_list = Vacancy.objects.order_by("-salary")[:10]
    vacancies_list_json = [vacancy.to_json() for vacancy in vacancies_list]
    return JsonResponse(vacancies_list_json, safe=False)