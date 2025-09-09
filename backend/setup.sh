#!/bin/bash
python3 -m venv env
source env/bin/activate
pip install django djangorestframework djangorestframework-simplejwt
django-admin startproject taskbuddy .
python manage.py startapp tasks
python manage.py migrate
python manage.py createsuperuser
