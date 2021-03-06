import 'k8w-linq-array';
import 'k8w-super-date';
import 'k8w-super-object';

//应对IE9以下没有console
if (typeof window != 'undefined' && !window.console) {
    (window as any).console = {};
    console.log = console.debug = console.info = console.warn = console.error = console.time = console.timeEnd = function(){}
}

//应对某些浏览器没有console.debug的情况
if (!console.debug) {
    console.debug = console.log;
}