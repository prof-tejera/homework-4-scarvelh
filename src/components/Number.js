import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
  right: 0;
  bottom: 0;
  align-items: center;
  //display:flex;
  //align:"center";
`;

class Number extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)} style={this.props.style}>
        {this.props.value}
      </Container>
    );
  }
}

Number.propTypes = {
  // FOR TESTING COMMENTED OUT
  //onClick: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  props: PropTypes.object
};

export default Number;
