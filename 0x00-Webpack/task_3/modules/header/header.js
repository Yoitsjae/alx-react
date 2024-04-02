import $ from 'jquery';

$(document).ready(() => {
    $('body').prepend('<div class="header">Holberton Dashboard</div>');
    $('body').prepend('<div id="logo"></div>');
    $('#logo').css({
        'width': '200px',
        'height': '200px',
        'background-image': 'url("../assets/holberton-logo.jpg")',
        'background-size': 'cover'
    });
});
