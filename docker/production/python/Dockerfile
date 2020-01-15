FROM python:3.6

WORKDIR /app

COPY . /app/

RUN pip install -r requirements/prod.txt

EXPOSE 8000

CMD ["gunicorn", "marketyproject.wsgi", "-b 0.0.0.0:8000"]