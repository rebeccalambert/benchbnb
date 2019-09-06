import * as APIUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
  
});

export const grabBenches = () => dispatch => (
  APIUtil.fetchBenches().then((benches) => dispatch(receiveBenches(benches)))
);