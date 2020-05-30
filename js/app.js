/**
 * followMouse section, this code handle circle mouse direction
 */

var xmouse, ymouse;

var body = document.querySelector('#body');

body.addEventListener('mousemove', function(e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
})

var ball = document.querySelector('#ball');

var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;

        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }

    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
};