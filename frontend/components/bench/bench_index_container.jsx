import BenchIndex from "./bench_index";
import React from 'react';
import { connect } from 'react-redux';
import {grabBenches} from '../../actions/bench_actions';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches)
});

const mapDispatchToProps = dispatch => ({
  grabBenches: () => dispatch(grabBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);