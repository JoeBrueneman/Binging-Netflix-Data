# Import the dependencies.
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
import psycopg2

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################

engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost/neflix_binging_data")

# Base = automap_base()

# Base.prepare(autoload_with=engine)

# Base.classes.keys()

# Test = Base.classes.Netflix_Test_Data

session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/views<br/>"
        f"/api/v1.0/rating<br/>"
        f"/api/v1.0/genre<br/>"
        f"/api/v1.0/country<br/>"
        f"/api/v1.0/tv-rating<br/>"
    )

# @app.route("/api/v1.0/views")
# def views():
#     top_viewed = session.query(Netflix_Test_Data.Hours_Viewed).order_by(Netflix_Test_Data.Hours_Viewed.desc()).limit(10)

#     all_viewed = list(np.ravel(top_viewed))

#     return jsonify(all_viewed)

# @app.route("/api/v1.0/rating")
# def rating():
#     top_rating = session.query(Netflix_Test_Data.rating).order_by(Netflix_Test_Data.rating.desc()).limit(10)

#     all_rating = list(np.ravel(top_rating))
    
#     return jsonify(all_rating)

# @app.route("/api/v1.0/genre")
# def genre():    
#     top_genre = session.query(Netflix_Test_Data.genre, func.sum(Netflix_Test_Data.Hours_Viewed)).\
#         group_by(Netflix_Test_Data.genre).\
#         order_by(func.sum(Netflix_Test_Data.Hours_Viewed).desc()).all()

#     all_genre = list(np.ravel(top_genre))

#     return jsonify(all_genre)

if __name__ =="__main__":
    app.run(debug = True)