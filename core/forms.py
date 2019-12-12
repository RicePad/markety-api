from django import forms

PAYMENT_CHOICES = (
    ('S', 'Stripe'),
    ('P', 'PAYPAL')
)

class CheckoutForm(forms.Form):
    shipping_address = forms.Charfield(required=False)
    shipping_address2 = forms.Charfield(required=False)
    shipping_country = CountryField(blank_label='(select country)').formfield(
        required=False,
        widget=CountrySelectWidget(attrs={
            'class': 'custom-select d-block w-100',}))

    shipping_zip = forms.Charfield(required=False)
    billing_address = forms.Charfield(required=False)
    billing_address2 = forms.Charfield(required=False)
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
