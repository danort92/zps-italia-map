var wms_layers = [];


        var lyr_Mappadombre_0 = new ol.layer.Tile({
            'title': 'Mappa d\'ombre',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Regioni_1 = new ol.format.GeoJSON();
var features_Regioni_1 = format_Regioni_1.readFeatures(json_Regioni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regioni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regioni_1.addFeatures(features_Regioni_1);
var lyr_Regioni_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regioni_1, 
                style: style_Regioni_1,
                popuplayertitle: 'Regioni',
                interactive: false,
                title: '<img src="styles/legend/Regioni_1.png" /> Regioni'
            });
var format_ZoneaProtezioneSpeciale_2 = new ol.format.GeoJSON();
var features_ZoneaProtezioneSpeciale_2 = format_ZoneaProtezioneSpeciale_2.readFeatures(json_ZoneaProtezioneSpeciale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneaProtezioneSpeciale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneaProtezioneSpeciale_2.addFeatures(features_ZoneaProtezioneSpeciale_2);
var lyr_ZoneaProtezioneSpeciale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneaProtezioneSpeciale_2, 
                style: style_ZoneaProtezioneSpeciale_2,
                popuplayertitle: 'Zone a Protezione Speciale',
                interactive: true,
                title: '<img src="styles/legend/ZoneaProtezioneSpeciale_2.png" /> Zone a Protezione Speciale'
            });
var format_Capolouoghidiregione_3 = new ol.format.GeoJSON();
var features_Capolouoghidiregione_3 = format_Capolouoghidiregione_3.readFeatures(json_Capolouoghidiregione_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capolouoghidiregione_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capolouoghidiregione_3.addFeatures(features_Capolouoghidiregione_3);
var lyr_Capolouoghidiregione_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capolouoghidiregione_3, 
                style: style_Capolouoghidiregione_3,
                popuplayertitle: 'Capolouoghi di regione',
                interactive: true,
                title: '<img src="styles/legend/Capolouoghidiregione_3.png" /> Capolouoghi di regione'
            });
var group_Cittprincipali = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Città principali'});

lyr_Mappadombre_0.setVisible(true);lyr_Regioni_1.setVisible(true);lyr_ZoneaProtezioneSpeciale_2.setVisible(true);lyr_Capolouoghidiregione_3.setVisible(true);
var layersList = [lyr_Mappadombre_0,lyr_Regioni_1,lyr_ZoneaProtezioneSpeciale_2,lyr_Capolouoghidiregione_3];
lyr_Regioni_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_km2': 'area_km2', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldAliases', {'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazi', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'perimeter': 'perimeter', 'hectares': 'hectares', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'nowprint': 'nowprint', 'Nome': 'Nome', 'Area (ha)': 'Area (ha)', 'Reg_biog': 'Reg_biog', 'Regione': 'Regione', });
lyr_Capolouoghidiregione_3.set('fieldAliases', {'city': 'city', 'lat': 'lat', 'lng': 'lng', 'country': 'country', 'iso2': 'iso2', 'admin_name': 'admin_name', 'capital': 'capital', 'population': 'population', 'populati_1': 'populati_1', });
lyr_Regioni_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_km2': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'auxiliar_3': 'TextEdit', 'auxiliar_4': 'TextEdit', 'auxiliar_5': 'TextEdit', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldImages', {'codice': '', 'tipo_sito': '', 'denominazi': '', 'aggiorn': '', 'fuso': '', 'perimeter': '', 'hectares': '', 'sic_zsc': '', 'zps': '', 'nowprint': '', 'Nome': '', 'Area (ha)': '', 'Reg_biog': '', 'Regione': '', });
lyr_Capolouoghidiregione_3.set('fieldImages', {'city': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'country': 'TextEdit', 'iso2': 'TextEdit', 'admin_name': 'TextEdit', 'capital': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', });
lyr_Regioni_1.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'DEN_REG': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_km2': 'hidden field', 'auxiliary_': 'hidden field', 'auxiliar_1': 'hidden field', 'auxiliar_2': 'hidden field', 'auxiliar_3': 'hidden field', 'auxiliar_4': 'hidden field', 'auxiliar_5': 'hidden field', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldLabels', {'codice': 'hidden field', 'tipo_sito': 'hidden field', 'denominazi': 'hidden field', 'aggiorn': 'hidden field', 'fuso': 'hidden field', 'perimeter': 'hidden field', 'hectares': 'hidden field', 'sic_zsc': 'hidden field', 'zps': 'hidden field', 'nowprint': 'hidden field', 'Nome': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Reg_biog': 'inline label - always visible', 'Regione': 'inline label - always visible', });
lyr_Capolouoghidiregione_3.set('fieldLabels', {'city': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'country': 'hidden field', 'iso2': 'hidden field', 'admin_name': 'hidden field', 'capital': 'hidden field', 'population': 'hidden field', 'populati_1': 'hidden field', });
lyr_Capolouoghidiregione_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});