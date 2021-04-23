const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

essentialItems = {
    required: true,
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 30
}
const UserSchema = new Schema({
    firstName: {
        ...essentialItems,
        validate(value) {
            if (value.length < 3) {
                throw new Error("first name should be greater than 5 characters.")
            }
        }
    },
    lastName: {
        ...essentialItems,
        validate(value) {
            if (value.length < 3) {
                throw new Error("last name should be greater than 3 character")
            }

        }

    },
    userName: {
        ...essentialItems,
        unique: true,
        validate(value) {
            if (value.length < 3) {
                throw new Error("username should be greater than 3 character")
            }
        }
    },
    password: {
        ...essentialItems,
        trim: false,
        validate(value) {
            if (value.length < 3) {
                throw new Error("username should be greater than 3 character")
            }
        }
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female']

    },
    Email: {
        ...essentialItems,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (value.match(/\d/g).length !== value.length) {
                throw new Error("Mobile Number should be number.")
            }

        }
    },
    role: {
        type: String,
        enum: ['superAdmin', 'admin', 'blogger'],
        default: 'blogger'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    }
})

UserSchema.methods.toJSON = function () {
    let user = this;
    user = user.toObject();
    delete user.password;
    delete user.__v;
    return user;
}

UserSchema.pre('save', function (next) {
    const user = this;
    if (this.isNew || this.isModified('password')) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                return next();
            });
        });
    } else {
        return next();
    };

})

module.exports = mongoose.model('User', UserSchema)