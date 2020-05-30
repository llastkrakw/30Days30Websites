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
            { id: 1, img: 'Mon initiation avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 2, img: 'Blogger avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 3, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 4, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 5, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 6, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 7, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 8, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 9, img: 'Mon initiation avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 10, img: 'Blogger avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 11, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 12, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 13, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 14, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 15, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 16, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 17, img: 'Mon initiation avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 18, img: 'Blogger avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 19, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 20, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 21, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 22, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 23, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 24, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 25, img: 'Mon initiation avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 26, img: 'Blogger avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 27, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 28, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 29, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
            { id: 30, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' }
        ],

        activeItems: [
            { id: 1, img: 'Mon initiation avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 2, img: 'Blogger avec Vue', desc: '', codepenLink: '', name: '' },
            { id: 3, img: 'Pourquoi Vue est tellement cool', desc: '', codepenLink: '', name: '' },
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
        }
    }
})