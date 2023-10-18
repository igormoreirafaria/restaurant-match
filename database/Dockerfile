FROM python:3.11-alpine

ADD . /code
WORKDIR /code

RUN pip install pymongo

CMD ["python", "filldb.py"]