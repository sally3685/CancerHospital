'use client';

import { useEffect, useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function ChartMap() {
  useEffect(() => {
    if (!am5.getRootById('chartdiv1')) {
      var root = am5.Root.new('chartdiv1');

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: 'panX',
          wheelY: 'zoomX',
          pinchZoomX: true,
        })
      );

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          behavior: 'none',
        })
      );
      cursor.lineY.set('visible', false);

      // The data
      var data = [
        {
          year: '1994',
          Colon: 2,
          Blood: 0,
          Prostat: 1,
        },
        {
          year: '1995',
          Colon: 2.1,
          Blood: 0.4,
          Prostat: 1.1,
        },
        {
          year: '1996',
          Colon: 2.2,
          Blood: 0.5,
          Prostat: 1,
        },
        {
          year: '1997',
          Colon: 2.3,
          Blood: 0.7,
          Prostat: 0.6,
        },
        {
          year: '1998',
          Colon: 2.2,
          Blood: 1,
          Prostat: 0.3,
        },
        {
          year: '1999',
          Colon: 2,
          Blood: 1.2,
          Prostat: 0.3,
        },
        {
          year: '2000',
          Colon: 2.2,
          Blood: 0.9,
          Prostat: 0.4,
        },
        {
          year: '2001',
          Colon: 2.5,
          Blood: 0.5,
          Prostat: 0.7,
        },
        {
          year: '2002',
          Colon: 2.8,
          Blood: -0.1,
          Prostat: 1,
        },
        {
          year: '2003',
          Colon: 3,
          Blood: -0.4,
          Prostat: 1.2,
        },
        {
          year: '2004',
          Colon: 3.5,
          Blood: -1,
          Prostat: 1.2,
        },
        {
          year: '2005',
          Colon: 3.4,
          Blood: -1,
          Prostat: 1.5,
        },
        {
          year: '2006',
          Colon: 3,
          Blood: -0.7,
          Prostat: 0.9,
        },
        {
          year: '2007',
          Colon: 2,
          Blood: 0.1,
          Prostat: 1.5,
        },
        {
          year: '2008',
          Colon: 1.5,
          Blood: 0.4,
          Prostat: 2.1,
        },
        {
          year: '2009',
          Colon: 1.6,
          Blood: 0,
          Prostat: 1.9,
        },
        {
          year: '2010',
          Colon: 1.7,
          Blood: -0.2,
          Prostat: 1.5,
        },
        {
          year: '2011',
          Colon: 1.2,
          Blood: 0.3,
          Prostat: 0.8,
        },
        {
          year: '2012',
          Colon: 1,
          Blood: 0.5,
          Prostat: 0.8,
        },
      ];

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: 'year',
          startLocation: 0.5,
          endLocation: 0.5,
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      xAxis.data.setAll(data);
      var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 1,
          max: 4,
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

      function createSeries(name: string, field: string, color: string) {
        var series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            stacked: true,
            valueYField: field,
            categoryXField: 'year',
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: 'horizontal',
              labelText: '[bold]{name}[/]\n{categoryX}: {valueY}',
            }),
          })
        );
        series.fills.template.setAll({
          fillOpacity: 0.5,
          visible: true,
        });
        series.set('fill', am5.color(color));
        series.data.setAll(data);
      }

      createSeries('Colon', 'Colon', '#A9FFF7');
      createSeries('Blood', 'Blood', '#94FBAB');
      createSeries('Prostat', 'Prostat', '#82ABA1');

      // Add scrollbar
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set(
        'scrollbarX',
        am5.Scrollbar.new(root, {
          orientation: 'horizontal',
        })
      );
    }
  });

  return (
    <div className="container w-full h-full min-w-[350px] flex justify-center items-center flex-col gap-4">
      <div id="chartdiv1" className=" w-full h-full"></div>
    </div>
  );
}
export default ChartMap;
