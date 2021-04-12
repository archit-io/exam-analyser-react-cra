import React, { Component } from 'react';
import Chart from 'chart.js';


class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

    componentDidMount() {
  this.myChart = new Chart(this.chartRef.current, {
    type: 'bar',
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100
            }
          }
        ]
      }
    },
    data: {
      labels: this.props.data.map(d => d.label),
      datasets: [{
        label: this.props.title,
        data: this.props.data.map(d => d.value),
        backgroundColor: this.props.color
      }]
    }
  });
}

  render() {
    return (
        <div className="keyword-chart-container" >
          <canvas ref={this.chartRef} />
        </div>
      
    );
  }
}

export default BarChart;