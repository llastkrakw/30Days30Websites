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

/**
 * vue handler
 */

var vm = new Vue({
    el: '#caroussel',
    data: {
        sites: [
            { id: 1, img: 'projects/ogbon/assets/preview.png', desc: 'Afica history web project coming soon', name: 'Ogbon', url: 'https://llastkrakw.github.io/30Days30Websites/projects/ogbon/' },
            { id: 2, img: 'projects/ogbon/yourexprnc/preview.png', desc: 'Partage d\'experience', name: 'Yourexprnc', url: 'https://llastkrakw.github.io/30Days30Websites/projects/yourexprnc/' }
        ],

        activeItems: [
            { id: 1, img: 'projects/ogbon/assets/preview.png', desc: 'Afica history web project coming soon', name: 'Ogbon', url: 'https://llastkrakw.github.io/30Days30Websites/projects/ogbon/' },
            { id: 2, img: 'projects/ogbon/yourexprnc/preview.png', desc: 'Partage d\'experience', name: 'Yourexprnc', url: 'https://llastkrakw.github.io/30Days30Websites/projects/yourexprnc/' }
        ],
    },

    methods: {
        goToNext: function() {

            if (this.activeItems.length > 0) {

                var i = 0;

                var target = this.activeItems.filter(item => {
                    i++;
                    return i === this.activeItems.length ? item : null;
                });

                index = target[0].id;

                var oldItems = this.activeItems;

                this.activeItems = [];

                this.activeItems = this.sites.filter(item => {

                    return item.id > index && item.id <= index + 3 ? item : null;

                });

                if (this.activeItems.length === 0) {

                    this.activeItems = oldItems;

                }

                console.log(this.activeItems);

            }

        },

        backToPrevious: function() {

            if (this.activeItems.length > 0) {

                var i = 0;

                var target = this.activeItems.filter(item => {
                    i++;
                    return i === 1 ? item : null;
                });

                index = target[0].id;

                var oldItems = this.activeItems;

                this.activeItems = [];

                this.activeItems = this.sites.filter(item => {

                    return item.id < index && item.id >= index - 3 ? item : null;

                });

                if (this.activeItems.length === 0) {

                    this.activeItems = oldItems;

                }

                console.log(this.activeItems);

            }
        },

    }
})