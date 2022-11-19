import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {saveToLS, loadFromLS}  from './helpers';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
player.on('timeupdate', throttle(e => {
    saveToLS('videoplayer-current-time', e.seconds);
}, 1000));

player
  .setCurrentTime(loadFromLS('videoplayer-current-time'))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });