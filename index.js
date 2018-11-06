'use strict';

const nb = require('neo-blessed');

function init(options) {
    if (options.render) {
        const screen = nb.screen({ smartCSR: true });
        screen.key(['escape','C-c','A-f4'],function(){
            return process.exit(0);
        });
        let lb = nb.listbar({
	    parent: screen,
  	    mouse: true,
            keys: true,
	    height: 1,
	    width: '100%',
	    vi: false, // vi movement keys for arrow directions
            autoCommandKeys: false,
            style: {
		bg: 'white',
		prefix: {
		    fg: 'white', // try and make invisible
		    bg: 'white' // try and make invisible
		},
		item: {
                    bg: 'white',
                    fg: 'black'
		},
                selected: {
                    fg: 'black',
                    bg: 'green'
                }
            },
	});
	lb.setItems({
		File:{
			keys:'A-F',
			//clickable:true, // default
			callback:function(){console.warn('File cb')},
			press:function(){console.warn('File')}
		},
                Help:{
			Keys:['A-H','F1'],
			//clickable:true, // default
			callback:function(){console.warn('Help cb')},
			press:function(){console.warn('Help')}
		}
	});
        screen.render();
	lb.focus();
        nb.cua.screen = screen;
    }
}

nb.cua = {};
nb.cua.init = init;

module.exports = nb;

