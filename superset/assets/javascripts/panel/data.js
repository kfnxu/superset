import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Templates', icon: <Web/>, link: '/setting' },
    { text: 'Dashboard', icon: <GridOn/>, link: '/dataimport' },
    { text: 'Profile', icon: <Assessment/>, link: '/chartboard' },
    { text: 'App Setting', icon: <Web/>, link: '/setting' },
    { text: 'Data Import', icon: <GridOn/>, link: '/dataimport' },
    { text: 'Chart', icon: <Assessment/>, link: '/chartboard' },

  ],

};

export default data;