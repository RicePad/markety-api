# Generated by Django 2.2.7 on 2019-12-26 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20191226_1739'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]
