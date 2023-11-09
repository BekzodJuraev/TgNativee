# Generated by Django 4.2.4 on 2023-11-09 12:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0015_remove_cost_format_chanel'),
        ('API', '0011_remove_chanel_add_chanel'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='chanel',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.add_chanel'),
            preserve_default=False,
        ),
    ]
