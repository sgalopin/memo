# SIG

## Date BDortho

###### WFS filtre OGC
```
http://wxs.ign.fr/awq4okxtnvd44b89xeew1r0p/geoportail/wfs?OUTPUTFORMAT=json&SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&SRSNAME=EPSG:2154&FILTER=<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><And><Intersects><PropertyName>the_geom</PropertyName><gml:Point srsName="EPSG:2154"><gml:coordinates>653827,6898907</gml:coordinates></gml:Point></Intersects><PropertyIsEqualTo><PropertyName>echelle</PropertyName><Literal>50</Literal></PropertyIsEqualTo><PropertyIsEqualTo><PropertyName>dep</PropertyName><Literal>02</Literal></PropertyIsEqualTo><PropertyIsEqualTo><PropertyName>pva</PropertyName><Literal>2013</Literal></PropertyIsEqualTo></And></Filter>&TYPENAME=ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE:graphe_bdortho
```

###### WFS filtre CQL
```
http://wxs.ign.fr/awq4okxtnvd44b89xeew1r0p/geoportail/wfs?OUTPUTFORMAT=json&SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&SRSNAME=EPSG:2154&CQL_FILTER=dep = '60' and echelle = 50 and pva = '2013' and BBOX(the_geom, 653827,6898907,653827,6898907,'EPSG:2154')&TYPENAME=ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE:graphe_bdortho
```

###### WMS
```
http://wxs.ign.fr/awq4okxtnvd44b89xeew1r0p/geoportail/v/wms?INFO_FORMAT=application%2Fjson&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&bbox=653472%2C6898552%2C654182%2C6899262%2CEPSG%3A2154&CRS=EPSG%3A2154&CQL_FILTER=dep%20%3D%20%2760%27%20and%20echelle%20%3D%2050%20and%20pva%20%3D%20%272013%27%20and%20BBOX(the_geom%2C%20653472%2C6898552%2C654182%2C6899262%2C%27EPSG%3A2154%27)&I=0&J=1&WIDTH=2&HEIGHT=2&FORMAT=image%2Fpng&FEATURE_COUNT=1&LAYERS=ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE&QUERY_LAYERS=ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE
```

## Docs Géoportail
- [Geoserver 2.3.3](http://docs.geoserver.org/latest/en/user/index.html)