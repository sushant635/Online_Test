from django.db import models

class Objectives(models.Model):
    question = models.CharField(max_length=100)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    option4 = models.CharField(max_length=100)
    correct_ans = models.CharField(max_length=100)

    def __str__(self):
        return self.question

class ShortAnswer(models.Model):
    question = models.CharField(max_length=100)
    answer = models.TextField(max_length=30, blank=True)
    
    def __str__(self):
        return self.answer
    