# Generated by Django 4.2.4 on 2024-04-04 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0053_alter_add_reklama_aprove'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add_reklama',
            name='aprove',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='add_reklama',
            name='stars_like',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
