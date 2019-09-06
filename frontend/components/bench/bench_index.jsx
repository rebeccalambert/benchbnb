import React, { Component } from 'react';
import BenchIndexItem from './bench_index_item';


export default class BenchIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.grabBenches();
  }



  render() {
    const { benches } = this.props;
    // if (this.props.benches=== undefined) return null;
    console.log(this.props.benches);
    return (
      <div>
        <ul>
          { benches && benches.map( (bench) => (
          
            <BenchIndexItem  
            key={bench.lat}
            bench={bench} />
          
          ))
          }
        </ul>
      </div>
    )
        
  }
}
