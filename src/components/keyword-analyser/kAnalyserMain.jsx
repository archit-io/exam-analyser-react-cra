import React, { Component } from 'react';
import NavBarC from '../navBarC';
import InputSearch from '../inputSearch';
import BarChart from '../charts/barChart';
import getFeeds from '../charts/dataGen';
import KAnalyserDropdownBlock from './kAnalyserDropdownBlock';


class KAnalyserMain extends Component {
    constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds()
    };
  }
    render() { 
        return (
            <React.Fragment>
                
                <InputSearch />
                <KAnalyserDropdownBlock />                
                <BarChart
                    data={this.state.feeds[2].data}
                    title={this.state.feeds[2].title}
                    color="#B08EA2"
                    />
                
            </React.Fragment>
          );
    }
}
 
export default KAnalyserMain;