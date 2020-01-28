from django import forms
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget
from .models import Item

PAYMENT_CHOICES = (
    ('S', 'STRIPE'),
    ('P', 'PAYPAL')
)

CATEGORY_CHOICES = (
    ('F', 'Fruits'),
    ('V', 'Vegetables'),
    ('D', 'Dairy')

)

LABEL_CHOICES = (
    ('P', 'primary'),
    ('S', 'secondary'),
    ('D', 'danger')

)


class ItemCreateForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ('title', 'price', 'discount_price', 'category', 'label', 'description', 'image')

class CheckoutForm(forms.Form):
    shipping_address = forms.CharField(required=False)
    shipping_address2 = forms.CharField(required=False)
    shipping_country = CountryField(blank_label='(select country)').formfield(
        required=False,
        widget=CountrySelectWidget(attrs={
            'class': 'custom-select d-block w-100',}))

    shipping_zip = forms.CharField(required=False)
    billing_address = forms.CharField(required=False)
    billing_address2 = forms.CharField(required=False)
    billing_country = CountryField(blank_label='(select country)').formfield(
        required=False,
        widget=CountrySelectWidget(attrs={
            'class': 'custom-select d-block w-100',
        }))

    billing_zip = forms.CharField(required=False)

    same_billing_address = forms.BooleanField(required=False)
    set_default_shipping = forms.BooleanField(required=False)
    use_default_shipping = forms.BooleanField(required=False)
    set_default_billing = forms.BooleanField(required=False)
    use_default_billing = forms.BooleanField(required=False)

    payment_option = forms.ChoiceField(
        widget=forms.RadioSelect, choices=PAYMENT_CHOICES)


class PaymentForm(forms.Form):
    stripeToken = forms.CharField(required=False)
    save = forms.BooleanField(required=False)
    use_default = forms.BooleanField(required=False)