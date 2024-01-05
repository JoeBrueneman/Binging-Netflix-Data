# Import the dependencies.
import numpy as np

import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
import psycopg2

from flask import Flask, jsonify, render_template



app = Flask(__name__)


engine = create_engine("sqlite:///Resources/netflix_data_db.sqlite")


@app.route('/')
def home():
    return app.send_static_file('index.html')


@app.route('/data')
def return_data():
    results = engine.execute('select * from netflix_data').all()
    data=[]
    for each_result in results:
        data.append(list(each_result))
    return jsonify(data)



if __name__ =="__main__":
    app.run(debug = True)