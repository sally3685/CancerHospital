'use client';

import { useEffect, useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function ChartPie() {
  useEffect(() => {
    if (!am5.getRootById('chartdiv')) {
      var root = am5.Root.new('chartdiv');

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          startAngle: 160,
          endAngle: 380,
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series

      var series0 = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: 'litres',
          categoryField: 'country',
          startAngle: 160,
          endAngle: 380,
          radius: am5.percent(70),
          innerRadius: am5.percent(65),
        })
      );

      // var colorSet = am5.ColorSet.new(root, {
      //   colors: [series0.get('colors').getIndex(0)],
      //   passOptions: {
      //     lightness: -0.05,
      //     hue: 0,
      //   },
      // });
      series0.set('fill', am5.color(0x095256));

      series0.ticks.template.set('forceHidden', true);
      series0.labels.template.set('forceHidden', true);

      var series1 = chart.series.push(
        am5percent.PieSeries.new(root, {
          startAngle: 160,
          endAngle: 380,
          valueField: 'bottles',
          innerRadius: am5.percent(80),
          categoryField: 'country',
        })
      );

      series1.ticks.template.set('forceHidden', true);
      series1.labels.template.set('forceHidden', true);
      // series1.chart.c'''olo
      // set('colors', [

      // am5.color(0x095256),
      // am5.color(0x095256),
      // am5.color(0x095256),
      // am5.color(0x095256),
      // am5.color(0x095256),
      // am5.color(0x095256),
      // ]);
      // chart.colors.list = [

      //   ];

      series1
        .get('colors')!
        .set('colors', [
          am5.color(0x333366),
          am5.color(0x8d8aff),
          am5.color(0xf68f76),
        ]);
      var label = chart.seriesContainer.children.push(
        am5.Label.new(root, {
          textAlign: 'center',
          centerY: am5.p100,
          centerX: am5.p50,
          text: '[fontSize:18px]total[/]:\n[bold fontSize:30px]1647.9[/]',
        })
      );

      var data = [
        {
          country: 'Trestment',
          litres: 501.9,
          bottles: 1500,
        },
        {
          country: 'Test',
          litres: 301.9,
          bottles: 990,
        },
        {
          country: 'Room',
          litres: 201.1,
          bottles: 785,
        },
      ];
      var data1 = [
        {
          country: 'Hayat',
          litres: 501.9,
          bottles: 1500,
        },
        {
          country: 'Sama',
          litres: 301.9,
          bottles: 990,
        },
        {
          country: 'Barakat',
          litres: 201.1,
          bottles: 785,
        },
      ];

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series0.data.setAll(data1);
      series1.data.setAll(data);
      // let chart = root.container.children.push(am5percent.PieChart.new(root, {}));
      // let series = chart.series.push(
      //   am5percent.PieSeries.new(root, {
      //     name: 'Series',
      //     categoryField: 'country',
      //     valueField: 'sales',
      //   })
      // );
      // series.data.setAll([
      //   {
      //     country: 'France',
      //     sales: 100000,
      //   },
      //   {
      //     country: 'Spain',
      //     sales: 160000,
      //   },
      //   {
      //     country: 'United Kingdom',
      //     sales: 80000,
      //   },
      // ]);
    }
  });

  return (
    <div className="container lg:w-1/2 w-full h-1/2 lg:h-full min-w-[350px] flex justify-center items-center flex-col gap-4">
      <h2 className="font-bold w-full text-center text-xl ">
        Payments Detailes
      </h2>
      <div id="chartdiv" className=" w-full h-[350px]"></div>
    </div>
  );
}
export default ChartPie;
