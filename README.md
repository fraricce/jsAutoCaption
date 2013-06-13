jsAutoCaption
=============

Given an image tag, it automatically adds a nice caption box

See the live demo at http://jsfiddle.net/fraricce/WVGz8/

Usage:

// to apply to an image, just add .autoTitle class in your html file and invoke the plugin in
// the javascript side

var options = {
                "courtesyText" : "PixCone image",
                "borderWidth" : "2",
                "borderColor" : "#f00",
                "textAlign" : "center",
            };

$('.autoTitle').showAltTitle();

