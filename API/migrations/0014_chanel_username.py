# Generated by Django 4.1.2 on 2023-11-09 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0013_remove_chanel_description_remove_chanel_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='username',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
    ]