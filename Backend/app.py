from datetime import datetime
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSONB
# create a flask app, we are telling flask where this app is instantiating.
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'postgresql://postgres:sukriti1@localhost/flask')
# create a database object, we are telling flask to use SQLAlchemy.
db = SQLAlchemy(app)


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(500))
    name = db.Column(db.String(500))
    other_data = db.Column(JSONB)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    entry_id = db.Column(db.Integer, primary_key=True)

    def __init__(self, type, name, other_data=None):
        self.type = type
        self.name = name
        self.other_data = other_data

    def __repr__(self):
        return '<Event %r>' % self.name


def format_event(event):
    return {
        'id': event.id,
        'type': event.type,
        'name': event.name,
        'other_data': event.other_data,
        'date': event.date.strftime('%Y-%m-%d %H:%M:%S'),
        'entry_id': event.entry_id
    }


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/event', methods=['POST'])
def add_event():
    type = request.json['type']
    name = request.json['name']
    other_data = request.json['other_data']
    event = Event(type, name, other_data)
    db.session.add(event)
    db.session.commit()
    return format_event(event)


if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='
    # run the app in debug mode.
