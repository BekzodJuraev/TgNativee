# Generated by Django 4.2.4 on 2023-11-07 08:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_add_chanel_username'),
        ('API', '0004_chanel_views'),
    ]

    operations = [
        migrations.AddField(
            model_name='chanel',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.add_chanel'),
            preserve_default=False,
        ),
    ]
