# Generated by Django 4.2.4 on 2024-03-26 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0049_alter_add_reklama_order_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='add_reklama',
            name='commented',
            field=models.TextField(null=True),
        ),
    ]
