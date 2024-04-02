import $ from 'jquery';
import _ from 'lodash';

let count = 0;

const updateCounter = _.debounce(function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 300);

$(document).ready(function() {
    $('body').append('<p id="count"></p>');
    $('body').append('<button>Click here to get started</button>');

    $('button').click(function() {
        updateCounter();
    });

    $('body').append('<p>Copyright - Holberton School</p>');
});
