from django import forms
from .models import ShortAnswer

class ShortForm(forms.ModelForm):

    class Meta:
        model = ShortAnswer

        fields = ('answer')