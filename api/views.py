from django.shortcuts import render
from .models import* 
from .serializers import* 
from rest_framework.decorators import api_view 
from rest_framework.response import Response 

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "Objective":'/Objective/',
    }
    return Response(api_urls)
    
@api_view(['GET'])
def examonline(request):
    objective = Objectives.objects.all()
    # short = ShortAnswer.objects.all()
    # context = {"Exam":objective, "Short":short}
    serializer = ObjectiveSerializer(objective, many=True)

    return Response(serializer.data)