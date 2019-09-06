import React, { Component } from 'react';
import BenchIndex from "./bench/bench_index";
import BenchMap from "./bench_map/bench_map";

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BenchIndex props={this.props} />
        <BenchMap />
      </div>
    )
  }
}
