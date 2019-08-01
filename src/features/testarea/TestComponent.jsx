import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.test.data
})

export default connect(
  mapStateToProps
)(TestComponent);
