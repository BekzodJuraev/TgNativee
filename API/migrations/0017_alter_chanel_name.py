# Generated by Django 4.2.4 on 2023-11-10 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0016_chanel_add_chanel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chanel',
            name='name',
            field=models.CharField(max_length=150, verbose_name='Называние канала'),
        ),
    ]
