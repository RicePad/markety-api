# Generated by Django 2.2.7 on 2019-12-26 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20191226_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(height_field=250, upload_to='', width_field=250),
        ),
    ]