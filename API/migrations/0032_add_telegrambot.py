# Generated by Django 4.2.4 on 2024-01-19 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0031_add_userbot_is_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='Add_telegrambot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=200, verbose_name='Токен')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]