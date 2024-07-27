import React from 'react';
import ReactApexChart from 'react-apexcharts';
function StatisticsCharts(props) {
    const chartOptions = {
        // Define your chart options here
        chart: {
            type: 'area',
        },
        series: [
            {
                name: 'Series 1',
                data: [10, 20, 35, 32, 40, 70, null],
            },
        ],
        xaxis: {
            categories: ['SU', 'MO', 'TU', 'WE', 'TU', 'FR', 'SA'],
        },
        fill: {
            colors: ['#D7BD2E', '#FFD04E']
        },
        stroke: {
            curve: 'smooth',
        },
        colors: ['#FF9E00']
    }
    return (
        <div className="aspect-square">
            <ReactApexChart
                options={chartOptions}
                series={chartOptions.series}
                type="area"
                height={314}
            />
        </div>
    )
}

export default StatisticsCharts;