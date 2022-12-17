
// 堆叠图

var option1 = {
  tooltip: {
    trigger: 'item',
    // axisPointer: {
    //   // Use axis to trigger tooltip
    //   type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    // }
  },
  legend: {},
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Africa', 'Asia', 'Australia', 'Euroupe', 'North Amercia', 'South Amercia']
  },
  series: [
    {
      name: 'government_trust',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [0.0956959403, 0.1276979997,0.342000216,0.1406313556, 0.185261473,0.0901710366]
    },
    {
      name: 'generosity',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [0.2143055262,0.2815185606,0.488852188,0.2411214197, 0.3163696453,0.2106914334]
    },
    {
      name: 'gdp_per_capita',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [0.6009591533, 1.0188375002,1.4450604915, 1.3112494474,1.392882506,0.948780644]
    },
    {
      name: 'freedom',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [ 0.3623446617,0.4307361337,0.607834756,0.4178888292,0.5098571477,0.43762973]
    },
    {
      name: 'family',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [	 0.9934391006,1.1640815301,1.529118538,1.3881053406,1.3707105717,1.2751085044]
    },
    {
      name: 'dystopia_residual',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [ 1.7379142679,1.6737100628,2.055833578,1.8869025707,2.4141775763,2.2336185215]
    },
    {
      name: 'health',
      type: 'bar',
      stack: 'total',
      label: {
         
      },
      emphasis: {
        focus: 'series'
      },
      data: [ 0.307134,0.587419,0.830323,0.742984,0.772941,0.597809]
    },
  ]
};


