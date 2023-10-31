# Generated by Django 4.2.4 on 2023-10-31 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chanel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Називание канала')),
                ('pictures', models.ImageField(upload_to='', verbose_name='Лого')),
                ('subscribers', models.IntegerField()),
                ('created_at', models.DateTimeField()),
            ],
            options={
                'verbose_name': 'Канал',
                'verbose_name_plural': 'Канал',
                'ordering': ['created_at'],
            },
        ),
    ]
