# Generated by Django 4.2.4 on 2023-11-25 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0022_feedback_alter_chanel_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='PyrogramSession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session_name', models.CharField(max_length=255, unique=True)),
                ('api_id', models.IntegerField()),
                ('api_hash', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=20)),
            ],
        ),
    ]