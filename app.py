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


#################################################
# Flask Setup
#################################################

app = Flask(__name__)


#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///Resources/netflix_data_db.sqlite")


#################################################
# Flask Routes
#################################################

@app.route('/')
def home():
    #Homepage render the index.html file from the templates folder
    return render_template('index.html')


@app.route('/data')
def return_data():
    #Execute select all data from the netflix_data table
    results = engine.execute('select * from netflix_data').all()
    #Putting data through a list of dictionaries
    data = [r._asdict() for r in results]  
    #Loop to split genres by the ","  
    for d in data:
        d['genres'] = d['genres'].split(',')
    for d in data:
        if d["Title"] == 'Title':
            data.remove(d)
            break
    return jsonify(data)


#################################################
# Run App
#################################################
if __name__ =="__main__":
    app.run(debug = True)