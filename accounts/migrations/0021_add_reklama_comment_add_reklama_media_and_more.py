# Generated by Django 4.2.4 on 2023-11-11 04:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0020_alter_cost_format_add_chanel_add_reklama'),
    ]

    operations = [
        migrations.AddField(
            model_name='add_reklama',
            name='comment',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='add_reklama',
            name='media',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='add_reklama',
            name='name_ads',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='add_reklama',
            name='order_data',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='add_reklama',
            name='text_ads',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='add_reklama',
            name='user_order',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.profile_advertiser'),
        ),
    ]
