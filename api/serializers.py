from rest_framework import serializers
from .models import Objectives , ShortAnswer

class ObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objectives

        fields = '__all__'