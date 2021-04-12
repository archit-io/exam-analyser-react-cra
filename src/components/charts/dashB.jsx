import React, { Component } from 'react';
import Chart from 'chart.js';
import BarChart from './barChart';
import LineChart from './lineChart';
import DoughnutChart from './doughnutChart';
import getFeeds from './dataGen';
import '../../css/Styles.css'

class DashB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds()
    };
  }

  render() {
    return (
      <div className="App">
      <div className="main chart-wrapper">
        <LineChart
          data={this.state.feeds[0].data}
          title={this.state.feeds[0].title}
          color="#3E517A"
        />
      </div>
      <div className="sub chart-wrapper">
        <BarChart
          data={this.state.feeds[1].data}
          title={this.state.feeds[1].title}
          color="#70CAD1"
        />
      </div>
      <div className="sub chart-wrapper">
        <BarChart
          data={this.state.feeds[2].data}
          title={this.state.feeds[2].title}
          color="#B08EA2"
        />
      </div>
      <div className="sub chart-wrapper">
        <DoughnutChart
          data={this.state.feeds[3].data}
          title={this.state.feeds[3].title}
          colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
        />
      </div>
    </div>
    );
  }
}

export default DashB;