# Generated by Django 4.2.4 on 2023-11-11 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0021_add_reklama_comment_add_reklama_media_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add_reklama',
            name='media',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
