from django.db import models

# Create your models here.


class Position(models.Model):
    title = models.CharField(verbose_name='Заглавие', max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'позиция'
        verbose_name_plural = 'позиции'


class Employee(models.Model):
    fullname = models.CharField(verbose_name='Име', max_length=100)
    emp_code = models.CharField(max_length=3)
    mobile = models.CharField(max_length=15)
    position = models.ForeignKey(
        Position, verbose_name='Позиция', on_delete=models.CASCADE)
