import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
    let count = 0;
    $('#count').text(`${++count} clicks on the button`);
}

$(document).ready(() => {
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    $('#clickButton').on('click', _.debounce(updateCounter, 500));
});
