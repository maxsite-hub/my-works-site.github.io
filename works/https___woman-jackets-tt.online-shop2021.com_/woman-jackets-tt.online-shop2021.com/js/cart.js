/* eslint-disable no-var,prefer-arrow-callback,vars-on-top */
var es6 = document.createElement('script');
es6.src = 'js/cart.es6.js';
es6.type = 'module';

var es5 = document.createElement('script');
es5.src = 'js/cart.es5.js';
es5.setAttribute('nomodule', true);

var polyfill = document.createElement('script');
polyfill.src = 'https://unpkg.com/@webcomponents/webcomponentsjs@2.1.2/webcomponents-loader.js';

polyfill.onload = function () {
  window.WebComponents.waitFor(function () {
    document.head.appendChild(es6);
    document.head.appendChild(es5);
  });
};

document.head.appendChild(polyfill);
