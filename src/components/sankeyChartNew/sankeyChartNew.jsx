import React from 'react';
import { Chart } from 'react-google-charts';

const SankeyChartNew = () => {
    const data = [
        ['From', 'To', 'Number of Calls'],
        ['No Shows', 'Booked Appointments', 150],
        ['Arrivals', 'Booked Appointments', 150],
        ['Unable to Agree Appointment Time', 'No-Booked Appointments', 150],
        ['Agent Calling Back With Price', 'No-Booked Appointments', 99],
        ['No Appointment Offered', 'No-Booked Appointments', 99],
        ['Services Not Provided', 'No-Booked Appointments', 150],
        ['Tow In', 'No-Booked Appointments', 150],
        ['Booked Appointments', 'Total Calls', 300],
        ['No-Booked Appointments', 'Total Calls', 648],
        ['Total Calls', 'No Answer', 99],
        ['Total Calls', 'Voice Mail', 150],
        ['Total Calls', 'Robo Calls', 150],
        ['Total Calls', 'Vendor', 99],
        ['Total Calls', 'Solicitation', 99],
        ['Total Calls', 'Wrong Number', 99],
        ['Total Calls', 'Disconnected', 150],
        ['Total Calls', 'Current Customer Inquiry', 99],
        ['Total Calls', '> 5 Minutes', 99],
        ['Total Calls', '< 30 Seconds', 99],
        ['Total Calls', 'Unclassified', 99],
        ['Total Calls', 'Foreign Language', 99],
        ['Total Calls', 'Error', 99],

    ];

    const options = {
        sankey: {
            node: {
                colors: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a'],
                width: 36,
                nodePadding: 20,
            },
            link: {
                colorMode: 'gradient',
                colors: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a'],
            },
        },
    };

    return (
        <Chart
            width={'100%'}
            height={'600px'}
            chartType="Sankey"
            loader={<div>Loading Chart</div>}
            data={data}
            options={options}
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default SankeyChartNew;
