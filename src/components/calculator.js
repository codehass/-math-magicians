import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="screen">
          {' '}
          <p>0</p>
        </div>
        <button type="button" className="btn num">
          AC
        </button>
        <button type="button" className="btn num">
          +/-
        </button>
        <button type="button" className="btn num">
          %
        </button>
        <button type="button" className="btn oper">
          /
        </button>

        <button type="button" className="btn num">
          7
        </button>
        <button type="button" className="btn num">
          8
        </button>
        <button type="button" className="btn num">
          9
        </button>
        <button type="button" className="btn oper">
          x
        </button>

        <button type="button" className="btn num">
          4
        </button>
        <button type="button" className="btn num">
          5
        </button>
        <button type="button" className="btn num">
          6
        </button>
        <button type="button" className="btn oper">
          -
        </button>

        <button type="button" className="btn num">
          1
        </button>
        <button type="button" className="btn num">
          2
        </button>
        <button type="button" className="btn num">
          3
        </button>
        <button type="button" className="btn oper">
          +
        </button>

        <button type="button" className="btn num zero">
          0
        </button>
        <button type="button" className="btn num">
          .
        </button>
        <button type="button" className="btn oper ">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
