# Generated by Django 4.2.4 on 2023-11-09 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0008_remove_chanel_user_chanel_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]