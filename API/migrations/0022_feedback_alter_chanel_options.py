# Generated by Django 4.2.4 on 2023-11-22 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0021_add_userbot_confirmation_code_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Клиент')),
                ('company_name', models.CharField(max_length=150, verbose_name='Название')),
                ('feedback', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterModelOptions(
            name='chanel',
            options={'ordering': ['-subscribers'], 'verbose_name': 'Канал', 'verbose_name_plural': 'Канал'},
        ),
    ]
