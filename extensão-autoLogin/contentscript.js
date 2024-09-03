// contentscript.js
console.log('Contentscript está rodando');

var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    console.log('script.js está sendo executado');
    s.parentNode.removeChild(s);
};
(document.head || document.documentElement).appendChild(s);

