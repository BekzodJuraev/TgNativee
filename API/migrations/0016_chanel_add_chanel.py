# Generated by Django 4.1.2 on 2023-11-09 15:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0019_remove_add_chanel_chanel'),
        ('API', '0015_remove_chanel_chanel'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='add_chanel',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.add_chanel'),
            preserve_default=False,
        ),
    ]