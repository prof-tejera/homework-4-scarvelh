import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`

  border: 1px solid black;
  width: 330px;
  height: 40px;
  margin-bottom: 10px;
  text-align: right;

  padding-top: 10px;
  font-weight: bolder;
  background-color: white; /* change the screen background color */
  //text-wrap:;
  overflow: scroll;
`;

class Screen extends Component {
  render() {
    // this.props.style is only validated if passed.
    return <Container style={this.props.style}>{this.props.value}</Container>;

  }
}

Screen.propTypes = {
   // FOR TESTING COMMENTED OUT
  //style: PropTypes.string
  style: PropTypes.object

};
export default Screen;
