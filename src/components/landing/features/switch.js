import { Switch, Label } from "atomize";
import React from "react";

class Switches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSwitchValue: false, // Инициализируем корректное состояние
    };
  }

  render() {
    const { selectedSwitchValue } = this.state; 

    return (
      <Label
        onClick={() =>
          this.setState({ selectedSwitchValue: !selectedSwitchValue }) 
        }
        align="center"
        textWeight="600"
        m={{ b: "1rem" }}
      >
        <Switch
          checked={selectedSwitchValue}
          inactiveColor="rgba(4, 11, 21, 1)"
          activeColor="success700"
          activeShadow=""
          border="2px solid"
          borderColor="rgb(166, 177, 184)"
        />
       
      </Label>
    );
  }
}

export default Switches;
