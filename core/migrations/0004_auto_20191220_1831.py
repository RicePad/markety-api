# Generated by Django 2.2.7 on 2019-12-20 18:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_payment_userprofile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='aparment_address',
            new_name='apartment_address',
        ),
    ]
