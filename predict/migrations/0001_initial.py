# Generated by Django 3.0.3 on 2020-03-12 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CollegeList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gre_range', models.CharField(max_length=50)),
                ('college_name', models.CharField(max_length=250)),
                ('college_site', models.CharField(max_length=100)),
            ],
        ),
    ]