/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
    var date = new Date(time),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
        return;

    return day_diff == 0 && (
        diff < 60 && "Hace un momento" ||
        diff < 120 && "Hace 1 minuto" ||
        diff < 3600 && "Hace " + Math.floor( diff / 60 ) + " mins" ||
        diff < 7200 && "Hace 1 hora" ||
        diff < 86400 && "Hace " + Math.floor( diff / 3600 ) + " horas") ||
        day_diff == 1 && "Ayer" ||
        day_diff < 7 && "Hace " + day_diff + " dias" ||
        day_diff < 31 && "Hace " + Math.ceil( day_diff / 7 ) + " Semanas";
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
    jQuery.fn.prettyDate = function(){
        return this.each(function(){
            var date = prettyDate(this.title);
            if ( date )
                jQuery(this).text( date );
        });
    };