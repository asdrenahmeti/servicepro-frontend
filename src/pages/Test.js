import React from "react";
import {Button} from "@material-ui/core"

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Test </h1>
        <Button color="primary" variant="contained">
          test
        </Button>
      </div>
    );
  }
}

export default Test;
