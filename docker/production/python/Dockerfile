FROM python:3.6

COPY ./markety /markety

WORKDIR /app

RUN pip install -r requirements/prod.txt

EXPOSE 8000


CMD ["gunicorn", "tickets.wsgi", "-b 0.0.0.0:8000"]