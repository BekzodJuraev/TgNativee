# Generated by Django 4.1.2 on 2023-11-09 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0018_add_chanel_chanel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='add_chanel',
            name='chanel',
        ),
    ]