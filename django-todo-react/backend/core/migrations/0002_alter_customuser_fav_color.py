# Generated by Django 4.0.6 on 2022-09-11 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='fav_color',
            field=models.CharField(blank=True, max_length=1230),
        ),
    ]
