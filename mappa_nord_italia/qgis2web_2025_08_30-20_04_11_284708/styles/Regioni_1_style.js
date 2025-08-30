var size = 0;
var placement = 'point';

var style_Regioni_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#9c791f";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("DEN_REG") !== null) {
        labelText = String(feature.get("DEN_REG"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(132,106,20,0.6970000000000001)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.6970000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
