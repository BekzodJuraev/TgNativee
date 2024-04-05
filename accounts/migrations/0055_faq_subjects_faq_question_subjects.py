# Generated by Django 4.2.4 on 2024-04-05 04:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0054_alter_add_reklama_aprove_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faq_Subjects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subjects', models.CharField(max_length=150)),
            ],
        ),
        migrations.AddField(
            model_name='faq_question',
            name='subjects',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.faq_subjects'),
            preserve_default=False,
        ),
    ]