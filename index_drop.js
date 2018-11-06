'use strict';

const nb = require('neo-blessed');

function init(options) {
    if (options.render) {
        const screen = nb.screen({ smartCSR: true });
        screen.key(['escape','C-c','A-f4'],function(){
            return process.exit(0);
        });
        let lb = nb.list(); // listbar()
        screen.append(lb);
        screen.render();
        nb.cua.screen = screen;
const frame = nb.text({

    parent: screen,
    top: 'center',
    left: 'center',
    width: '80%',
    height: '80%',
    cursor: {
        shape: 'line'
    }

}); 
const data = require('./data');
const MenuWidget = require('./widgets/menu');

let tree = require('./tree');

tree.init(data);
let { 

    menuTitle, 
    menuItems 

} = tree.fromNode(getTitleAndMenuItems);
let menuWidget = MenuWidget(nb, menuTitle, menuItems);

frame.append(menuWidget);
screen.append(frame);


// this catches a user-emitted event from list items
// so the signature seems to be not right with screen.on
screen.key(['q', 'Q', 'escape','C-c'], quit);
screen.on('element select', handleListSelection);
menuWidget.focus();
screen.render();


// hoisted and loaded first

function getTitleAndMenuItems(node) {

    return {

        menuTitle: node.data,
        menuItems: node.children.map(child => child.data)

    };

}

function handleListSelection (el) {

    // resume here. this is a mess
    let index = el.selected;
    let menuData = tree.fromNode(node => {
        return node.children[index];
        treePtr.children[ index ];
    });

    let { menuTitle, menuItems } = tree.get(menuData, getTitleAndMenuItems);
    let [ titleWidget, listWidget ] = menuWidget.children;

    titleWidget.setContent(menuTitle);
    listWidget.setItems(menuItems);

    screen.render();

}

function quit() {
    process.exit(0);
}
    }
}

nb.cua = {};
nb.cua.init = init;

module.exports = nb;

