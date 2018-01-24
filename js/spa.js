/**
 * spa.js
 * Root namespace module
 */



/*jslint   browser:true,contunue:true,
devel: true,  indent:2, maxerr:50,
newcap:tue, nomen:true,plusplus:true,
regexp:true, sloppy:true,vars:false,
white:true
 */

/*global $,spa */

var spa=(function(){
    var initModule=function($container){
        spa.shell.initModule($container);
    };
    return {initModule:initModule};
}());
