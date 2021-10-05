import { Component } from "react";
import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import { evaluate } from "mathjs";
import { splitMulti, replaceLast } from "./utils/utilities";
// align text in a grid
const AlignGrid = {

  display: "flex",
  alignItems: "center"
};
// equals button
const EqualButton = {

  backgroundColor: "green",
  color: "yellow",
  textAlign: "center"

};
// keys '+' '-' '/' '*'
const ArithmeticsKeys = {
  backgroundColor: "grey",
  textAlign: "center"

};
// keys '(' '-' ')' '.'
const SpecialKeys = {
  backgroundColor: "cyan",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};
// center text in Keys
const CenterNumberKeys = {
  textAlign: "center"
};

class Calculator extends Component {

  state = {
    operator: null,
    // keep the value of what is on the calculator screen
    calculatorValues: ""
    //   g:[]
  };

  handleNumberClick = (number) => {
    // remove the '+' for the +/- key
    // if (number === "+/-") {
    //
    //   number = "-";
    //   console.log("STOP");
    // }
    // append the values that is press to the state value 'calculatorValues'
    if (number === "+/-") {
      let currentScreen = this.state.calculatorValues;

      let number_array = splitMulti(currentScreen.toString(), ["*", "-", "+", "/"]);

      // create new concatenated value
      let concatValue = "-" + number_array[number_array.length - 1];

      // a little wired but it works
      if (number_array.length <= 2 && currentScreen.toString().substring(0, 1) === "-") {
        concatValue = number_array[number_array.length - 1];
      }
      // append a '-' sign in from of the last number in the array if the '+/-' ket was pressed
      let updatedFormula = replaceLast(currentScreen.toString(), (number_array[number_array.length - 1]), concatValue);
      // update state with the new updated values
      this.setState({ calculatorValues: updatedFormula });

    } else {
      this.setState({ calculatorValues: this.state.calculatorValues + number });

    }

  };

  handleOperatorClick = (operator) => {

    if (operator === "=") {
      // get formula from current state
      let calculatedResult = this.state.calculatorValues;
      // Array for evaluation parameters
      let evalStorage = [];
      // push value onto array
      evalStorage.push(calculatedResult);
      // Catch the error that is returned from the evaluation function
      try {
        // evaluation is been used from mathjs library
        this.setState({ calculatorValues: evaluate(evalStorage) });
      } catch (e) {
        this.setState({ calculatorValues: "Error" });
      }
      //console.log("Total == :" + evaluate("2+3"));
      //math.

    } else if (operator === "clear") {
      // clear calculator screen
      this.setState({ calculatorValues: "" });
      console.log("clear");
    } else {
      this.setState({ operator });
      this.setState({ calculatorValues: this.state.calculatorValues + operator });
    }
  };


  getScreenValue = () => this.state.calculatorValues;
  // AlignGrid = {
  //   display: "flex",
  //   //display: "inline-block"
  // }

  render() {
    return (
      <>
        <Screen value={this.getScreenValue()} />
        <div style={{ display: "inline-block" }}>
          <div style={AlignGrid}>
            <Number value={"("} onClick={this.handleNumberClick} style={SpecialKeys} />
            <Number value={"+/-"} onClick={this.handleNumberClick} style={SpecialKeys} />
            <Number value={")"} onClick={this.handleNumberClick} style={SpecialKeys} />
            <Operator value="clear" onClick={this.handleOperatorClick} style={CenterNumberKeys} />
          </div>
          <div style={AlignGrid}>
            <Number value={1} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={2} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={3} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Operator value="/" onClick={this.handleOperatorClick} style={ArithmeticsKeys} />

          </div>
          <div style={AlignGrid}>
            <Number value={4} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={5} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={6} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Operator value="*" onClick={this.handleOperatorClick} style={ArithmeticsKeys} />

          </div>
          <div style={AlignGrid}>
            <Number value={7} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={8} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Number value={9} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Operator value="+" onClick={this.handleOperatorClick} style={ArithmeticsKeys} />


          </div>

          <div style={AlignGrid}>
            <Number value={"."} onClick={this.handleNumberClick} style={SpecialKeys} />
            <Number value={0} onClick={this.handleNumberClick} style={CenterNumberKeys} />
            <Operator value="=" onClick={this.handleOperatorClick} style={EqualButton} />
            <Operator value="-" onClick={this.handleOperatorClick} style={ArithmeticsKeys} />
          </div>
        </div>

      </>
    );
  }
}

export default Calculator;
