FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/production/nginx/django_marketyproject.conf /etc/nginx/conf.d/
