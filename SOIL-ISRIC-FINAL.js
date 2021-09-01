
// import the data with the var names

var bulk = ee.Image("projects/soilgrids-isric/bdod_mean");
var  nitrogen = ee.Image("projects/soilgrids-isric/nitrogen_mean");
var ph = ee.Image("projects/soilgrids-isric/phh2o_mean");
var   soc = ee.Image("projects/soilgrids-isric/soc_mean"); 
var   sand = ee.Image("projects/soilgrids-isric/sand_mean");
var silt = ee.Image("projects/soilgrids-isric/silt_mean");
var  clay = ee.Image("projects/soilgrids-isric/clay_mean");



// study area boundary - area that lies within the point file 
var india = ee.FeatureCollection('users/achssanjay/NEPAL_BOUNDARY');

// study area point - shapefile
var riceland = ee.FeatureCollection('users/achssanjay/nepal_2020_wheat');

// clip the study area
var test = bulk.clip(india);
var test_2 = nitrogen.clip(india);
var test_3 = ph.clip(india);
var test_4 = soc.clip(india);
var test_5 = sand.clip(india);
var test_6 = silt.clip(india);
var test_7 = clay.clip(india);

Map.addLayer(test);
Map.addLayer(test_2);
Map.addLayer(test_3);
Map.addLayer(test_4);
Map.addLayer(test_6);
Map.addLayer(test_6);
Map.addLayer(test_7);
// mean for 0-30 cm data

var wmean = test.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test.select('bdod_0-5cm_mean'),
      'b2': test.select('bdod_5-15cm_mean'),
      'b3': test.select('bdod_15-30cm_mean'),
}); 

var wmean2 = test_2.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_2.select('nitrogen_0-5cm_mean'),
      'b2': test_2.select('nitrogen_5-15cm_mean'),
      'b3': test_2.select('nitrogen_15-30cm_mean'),
}); 

var wmean3 = test_3.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_3.select('phh2o_0-5cm_mean'),
      'b2': test_3.select('phh2o_5-15cm_mean'),
      'b3': test_3.select('phh2o_15-30cm_mean'),
}); 


var wmean4 = test_4.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_4.select('soc_0-5cm_mean'),
      'b2': test_4.select('soc_5-15cm_mean'),
      'b3': test_4.select('soc_15-30cm_mean'),
}); 



var wmean5 = test_5.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_5.select('sand_0-5cm_mean'),
      'b2': test_5.select('sand_5-15cm_mean'),
      'b3': test_5.select('sand_15-30cm_mean'),
}); 


var wmean6 = test_6.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_6.select('silt_0-5cm_mean'),
      'b2': test_6.select('silt_5-15cm_mean'),
      'b3': test_6.select('silt_15-30cm_mean'),
}); 



var wmean7 = test_7.expression(
    ' (5-0)/30*(b1)+(15-5)/30*(b2)+((30-15)/30*(b3))', {
      'b1': test_7.select('clay_0-5cm_mean'),
      'b2': test_7.select('clay_5-15cm_mean'),
      'b3': test_7.select('clay_15-30cm_mean'),
}); 





// Map.addLayer(wmean);


// export tiff

Export.image.toDrive({
image: wmean,
description: 'bulk',
scale : 1000
}
);

Export.image.toDrive({
image: wmean2,
description: 'nitrogen',
scale : 1000
}
);

Export.image.toDrive({
image: wmean3,
description: 'pH',
scale : 1000
}
);


Export.image.toDrive({
image: wmean4,
description: 'soc',
scale : 1000
}
);


Export.image.toDrive({
image: wmean5,
description: 'sand',
scale : 1000
}
);


Export.image.toDrive({
image: wmean6,
description: 'silt',
scale : 1000
}
);


Export.image.toDrive({
image: wmean7,
description: 'clay',
scale : 1000
}
);