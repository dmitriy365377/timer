import React from "react";
import { changeInterval } from "../reducer/reducer";
import { connect } from "../store+connect+provider";

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>
          Интервал обновления секундомера: {this.props.currentInterval} сек.
        </span>
        <span>
          <button onClick={() => this.props.changeInterval(-1)}>-</button>
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentInterval: state
});

const mapDispatchToProps = dispatch => ({
  changeInterval: value => dispatch(changeInterval(value))
});

// поменял местами первый state, а потом disptach
export const Interval = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalComponent);
