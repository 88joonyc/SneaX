from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.user_form import UserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@share_routes.route('/<int:id>', methods=['POST'])
@login_required
def update(id):
    user = User.query.get(id)
    form = UserForm()
    share.wallet = form.data['wallet']
    db.session.commit()
    return user.to_dict()
