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
var format_capitale_3 = new ol.format.GeoJSON();
var features_capitale_3 = format_capitale_3.readFeatures(json_capitale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capitale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capitale_3.addFeatures(features_capitale_3);
var lyr_capitale_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capitale_3, 
                style: style_capitale_3,
                popuplayertitle: 'capitale',
                interactive: true,
                title: '<img src="styles/legend/capitale_3.png" /> capitale'
            });
var format_capoluoghidiregione_4 = new ol.format.GeoJSON();
var features_capoluoghidiregione_4 = format_capoluoghidiregione_4.readFeatures(json_capoluoghidiregione_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capoluoghidiregione_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capoluoghidiregione_4.addFeatures(features_capoluoghidiregione_4);
var lyr_capoluoghidiregione_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capoluoghidiregione_4, 
                style: style_capoluoghidiregione_4,
                popuplayertitle: 'capoluoghi di regione',
                interactive: false,
                title: '<img src="styles/legend/capoluoghidiregione_4.png" /> capoluoghi di regione'
            });
var group_Cittprincipali = new ol.layer.Group({
                                layers: [lyr_capitale_3,lyr_capoluoghidiregione_4,],
                                fold: 'open',
                                title: 'Città principali'});

lyr_Mappadombre_0.setVisible(true);lyr_Regioni_1.setVisible(true);lyr_ZoneaProtezioneSpeciale_2.setVisible(true);lyr_capitale_3.setVisible(true);lyr_capoluoghidiregione_4.setVisible(true);
var layersList = [lyr_Mappadombre_0,lyr_Regioni_1,lyr_ZoneaProtezioneSpeciale_2,group_Cittprincipali];
lyr_Regioni_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_km2': 'area_km2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldAliases', {'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazi', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'perimeter': 'perimeter', 'hectares': 'hectares', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'nowprint': 'nowprint', 'Nome': 'Nome', 'Area (ha)': 'Area (ha)', 'Reg_biog': 'Reg_biog', 'Regione': 'Regione', });
lyr_capitale_3.set('fieldAliases', {'city': 'city', 'lat': 'lat', 'lng': 'lng', 'country': 'country', 'iso2': 'iso2', 'admin_name': 'admin_name', 'capital': 'capital', 'population': 'population', 'populati_1': 'populati_1', });
lyr_capoluoghidiregione_4.set('fieldAliases', {'city': 'city', 'lat': 'lat', 'lng': 'lng', 'country': 'country', 'iso2': 'iso2', 'admin_name': 'admin_name', 'capital': 'capital', 'population': 'population', 'populati_1': 'populati_1', });
lyr_Regioni_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_km2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldImages', {'codice': 'TextEdit', 'tipo_sito': 'TextEdit', 'denominazi': 'TextEdit', 'aggiorn': 'TextEdit', 'fuso': 'TextEdit', 'perimeter': 'TextEdit', 'hectares': 'TextEdit', 'sic_zsc': 'TextEdit', 'zps': 'TextEdit', 'nowprint': 'TextEdit', 'Nome': '', 'Area (ha)': '', 'Reg_biog': '', 'Regione': '', });
lyr_capitale_3.set('fieldImages', {'city': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'country': 'TextEdit', 'iso2': 'TextEdit', 'admin_name': 'TextEdit', 'capital': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', });
lyr_capoluoghidiregione_4.set('fieldImages', {'city': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'country': 'TextEdit', 'iso2': 'TextEdit', 'admin_name': 'TextEdit', 'capital': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', });
lyr_Regioni_1.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'DEN_REG': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_km2': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_ZoneaProtezioneSpeciale_2.set('fieldLabels', {'codice': 'hidden field', 'tipo_sito': 'hidden field', 'denominazi': 'hidden field', 'aggiorn': 'hidden field', 'fuso': 'hidden field', 'perimeter': 'hidden field', 'hectares': 'hidden field', 'sic_zsc': 'hidden field', 'zps': 'hidden field', 'nowprint': 'hidden field', 'Nome': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Reg_biog': 'inline label - always visible', 'Regione': 'inline label - always visible', });
lyr_capitale_3.set('fieldLabels', {'city': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'country': 'hidden field', 'iso2': 'hidden field', 'admin_name': 'hidden field', 'capital': 'hidden field', 'population': 'hidden field', 'populati_1': 'hidden field', });
lyr_capoluoghidiregione_4.set('fieldLabels', {'city': 'hidden field', 'lat': 'hidden field', 'lng': 'hidden field', 'country': 'hidden field', 'iso2': 'hidden field', 'admin_name': 'hidden field', 'capital': 'hidden field', 'population': 'hidden field', 'populati_1': 'hidden field', });
lyr_capoluoghidiregione_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});