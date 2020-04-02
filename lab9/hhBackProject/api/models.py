from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='description0')
    city = models.CharField(max_length=300)
    address = models.TextField(default='address0')
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='description0')
    salary = models.FloatField(default=0.0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default=1)
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company.id
        }