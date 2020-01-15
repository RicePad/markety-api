#!/bin/bash

echo "Running command '$*'"

python manage.py collectstatic

exec /bin/bash -c "$*"