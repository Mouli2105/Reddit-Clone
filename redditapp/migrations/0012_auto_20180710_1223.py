# Generated by Django 2.0.5 on 2018-07-10 06:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('redditapp', '0011_auto_20180628_2154'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='username',
            field=models.CharField(default=django.utils.timezone.now, max_length=128),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='profile',
            unique_together={('username',)},
        ),
    ]
