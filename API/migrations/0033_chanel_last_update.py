# Generated by Django 4.1.2 on 2024-02-11 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0032_add_telegrambot'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='last_update',
            field=models.DateTimeField(auto_now=True),
        ),
    ]