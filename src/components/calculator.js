import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const buttonName = event.target.textContent;
    this.setState((e) => calculate(
      {
        total: e.total,
        next: e.next,
        operation: e.operation,
      },
      buttonName,
    ));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calc">
        <div className="screen">
          <p>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </p>
        </div>
        <button type="button" className="btn num" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          %
        </button>
        <button type="button" className="btn oper" onClick={this.handleClick}>
          ÷
        </button>

        <button type="button" className="btn num" onClick={this.handleClick}>
          7
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          8
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          9
        </button>
        <button type="button" className="btn oper" onClick={this.handleClick}>
          x
        </button>

        <button type="button" className="btn num" onClick={this.handleClick}>
          4
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          5
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          6
        </button>
        <button type="button" className="btn oper" onClick={this.handleClick}>
          -
        </button>

        <button type="button" className="btn num" onClick={this.handleClick}>
          1
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          2
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          3
        </button>
        <button type="button" className="btn oper" onClick={this.handleClick}>
          +
        </button>

        <button
          type="button"
          className="btn num zero"
          onClick={this.handleClick}
        >
          0
        </button>
        <button type="button" className="btn num" onClick={this.handleClick}>
          .
        </button>
        <button type="button" className="btn oper " onClick={this.handleClick}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
