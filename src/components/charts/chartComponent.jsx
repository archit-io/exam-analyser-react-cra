import React, { Component } from 'react';
import Chart from 'chart.js';


class PlayGroundChart1 extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

    componentDidMount() {
  this.myChart = new Chart(this.chartRef.current, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'History: Last one year data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(235, 64, 52)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }        
            }]
        }
    }
    // options: {
    //     layout: {
    //         padding: {
    //             left: 50,
    //             right: 0,
    //             top: 0,
    //             bottom: 0
    //                 }
    //             }
    //         }
  });
}

  render() {
    return (//USE BELOW STYLE FOR WIDTH AND HEIGHT
        <div className="keyword-chart-container" style={{position: "relative", height:"50vh", width:"50%"}} >
          <canvas ref={this.chartRef} />
        </div>
      
    );
  }
}

export default PlayGroundChart1;