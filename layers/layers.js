var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sgfeaCPSUD_MUNICIPIOS_1 = new ol.format.GeoJSON();
var jsonSource_sgfeaCPSUD_MUNICIPIOS_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_sgfeaCPSUD_MUNICIPIOS_1
});var lyr_sgfeaCPSUD_MUNICIPIOS_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_sgfeaCPSUD_MUNICIPIOS_1, 
    style: style_sgfeaCPSUD_MUNICIPIOS_1,
    interactive: true,
    title: "sgfea:CPSUD_MUNICIPIOS"
});

function getsgfeaCPSUD_MUNICIPIOS_1Json(geojson) {
    var features_sgfeaCPSUD_MUNICIPIOS_1 = format_sgfeaCPSUD_MUNICIPIOS_1.readFeatures(geojson);
    jsonSource_sgfeaCPSUD_MUNICIPIOS_1.addFeatures(features_sgfeaCPSUD_MUNICIPIOS_1);
}
var format_ESTACIONESCONTROL_2 = new ol.format.GeoJSON();
var features_ESTACIONESCONTROL_2 = format_ESTACIONESCONTROL_2.readFeatures(json_ESTACIONESCONTROL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESCONTROL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESCONTROL_2.addFeatures(features_ESTACIONESCONTROL_2);
var lyr_ESTACIONESCONTROL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONESCONTROL_2, 
                style: style_ESTACIONESCONTROL_2,
                interactive: true,
    title: 'ESTACIONES CONTROL<br />\
    <img src="styles/legend/ESTACIONESCONTROL_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/ESTACIONESCONTROL_2_1.png" /> 1 - 5<br />\
    <img src="styles/legend/ESTACIONESCONTROL_2_2.png" /> 5-15<br />\
    <img src="styles/legend/ESTACIONESCONTROL_2_3.png" /> 15-50<br />\
    <img src="styles/legend/ESTACIONESCONTROL_2_4.png" /> >50<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sgfeaCPSUD_MUNICIPIOS_1.setVisible(true);lyr_ESTACIONESCONTROL_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sgfeaCPSUD_MUNICIPIOS_1,lyr_ESTACIONESCONTROL_2];
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldAliases', {'ID_MUNICIPIO': 'ID_MUNICIPIO', 'ID_PROVINCIA': 'ID_PROVINCIA', 'CD_MUNICIPIO': 'CD_MUNICIPIO', 'CD_INE': 'CD_INE', 'TX_NOMBRE': 'TX_NOMBRE', });
lyr_ESTACIONESCONTROL_2.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'LAYER': 'LAYER', 'PATH': 'PATH', 'CIF': 'CIF', 'NOMBRE_COM': 'NOMBRE_COM', 'AUTO_FIRMA': 'AUTO_FIRMA', 'FECHA_FIRM': 'FECHA_FIRM', 'EST_CONTRO': 'EST_CONTRO', 'CONTROL': 'CONTROL', });
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldImages', {'ID_MUNICIPIO': 'TextEdit', 'ID_PROVINCIA': 'TextEdit', 'CD_MUNICIPIO': 'TextEdit', 'CD_INE': 'TextEdit', 'TX_NOMBRE': 'TextEdit', });
lyr_ESTACIONESCONTROL_2.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'LAYER': 'TextEdit', 'PATH': 'TextEdit', 'CIF': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'AUTO_FIRMA': 'TextEdit', 'FECHA_FIRM': 'TextEdit', 'EST_CONTRO': 'TextEdit', 'CONTROL': 'TextEdit', });
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldLabels', {'ID_MUNICIPIO': 'no label', 'ID_PROVINCIA': 'no label', 'CD_MUNICIPIO': 'no label', 'CD_INE': 'no label', 'TX_NOMBRE': 'no label', });
lyr_ESTACIONESCONTROL_2.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'LAYER': 'no label', 'PATH': 'no label', 'CIF': 'no label', 'NOMBRE_COM': 'no label', 'AUTO_FIRMA': 'no label', 'FECHA_FIRM': 'no label', 'EST_CONTRO': 'no label', 'CONTROL': 'no label', });
lyr_ESTACIONESCONTROL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});