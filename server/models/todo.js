/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:16:48 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 12:00:37
 */

var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },

    completed: {
        type: Boolean,
        default: false

    },
    completeAt: {
        type: Number,
        default: null
    }

});

module.exports = {
    Todo: Todo
};