# Generated by Django 4.2.4 on 2023-11-09 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0010_chanel_add_chanel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chanel',
            name='add_chanel',
        ),
    ]
