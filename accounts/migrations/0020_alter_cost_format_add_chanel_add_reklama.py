# Generated by Django 4.2.4 on 2023-11-10 10:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0017_alter_chanel_name'),
        ('accounts', '0019_remove_add_chanel_chanel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cost_format',
            name='add_chanel',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cost_formats', to='accounts.add_chanel'),
        ),
        migrations.CreateModel(
            name='Add_Reklama',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chanel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.chanel')),
            ],
        ),
    ]
