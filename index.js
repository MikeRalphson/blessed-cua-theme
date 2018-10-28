'use strict';

const nb = require('neo-blessed');

function init(options) {
    if (options.render) {
        const screen = nb.screen({ smartCSR: true });
        screen.key(['escape','C-c','A-f4'],function(){
            return process.exit(0);
        });
        let lb = nb.listbar();
        screen.append(lb);
        screen.render();
        nb.cua.screen = screen;
    }
}

nb.cua = {};
nb.cua.init = init;

module.exports = nb;

