(function($) {
    
    $.fn.showAltTitle = function(options) {
        
        var img = $(this);
        
        if (options == undefined) {
            options = {
                "courtesyText" : "Caption not available",
                "borderWidth" : "1",
                "borderColor" : "#c0c0c0",
                "textAlign" : "center",
            };
        }

        var text = img.attr('title') || img.attr('alt');
        
        if ((text == undefined || text == '') && options.courtesyText) {
           text =  options.courtesyText;
        }
        
        var imgCssWidth = img.css('width');
        var width = imgCssWidth || img.width();
        
        var borderCol = options.borderColor || '#c0c0c0';
        var tAlign = options.textAlign || 'center';
        
        var cssFloat = img.css('float');
        var floatTag = '';
        if (cssFloat != undefined && cssFloat != '') {
            floatTag = 'float: ' + cssFloat + ';';
        }
        
        var imgSrc = img.attr('src');
        var slashPos = imgSrc.lastIndexOf('/');
        var wrapDivId = imgSrc.substr(slashPos + 1).replace('.','');
        var textDivId = 'vis-' + wrapDivId;
        
        $("<div id='" + wrapDivId + "'></div>").insertBefore(img);
        img.appendTo($('#' + wrapDivId));
        $('#' + wrapDivId).append("<div id='" + textDivId + "' style='clear:both;'></div>");
        
        var stl = "clear:both; " + floatTag + " width: " + width + "; border:1px solid " + borderCol + "; text-align:" + tAlign + ";";

        var textDiv = $('#' + textDivId);
        textDiv.attr('style', stl);
        textDiv.html(text);
    }

}(jQuery));
