# Generated by Django 4.2.4 on 2023-12-18 10:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0027_add_chanel_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add_chanel',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_advertisers', to='accounts.profile'),
        ),
        migrations.AlterField(
            model_name='profile_advertiser',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to=settings.AUTH_USER_MODEL),
        ),
    ]
