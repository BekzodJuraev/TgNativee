# Generated by Django 4.1.2 on 2023-11-09 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0015_remove_chanel_chanel'),
        ('accounts', '0017_rename_add_cost_format_add_chanel_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='add_chanel',
            name='chanel',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='API.chanel'),
            preserve_default=False,
        ),
    ]
