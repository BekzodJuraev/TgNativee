# Generated by Django 4.2.4 on 2023-11-09 09:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_alter_profile_advertiser_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cost_Format',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('placement_format', models.CharField(max_length=100)),
                ('cost_per_format', models.DecimalField(decimal_places=2, max_digits=10)),
                ('add_chanel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.add_chanel')),
            ],
        ),
    ]
