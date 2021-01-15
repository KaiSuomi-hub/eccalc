import PropTypes from 'prop-types';
import React from 'react';

const options = [
{label:"Canna Flores",value: 0.5,},
{label:"Canna Vega",value: 0.4,},
{label:"Biobizz Grow", value: 0.2, },
{label:"Biobizz Bloom", value: 0.1,},  
{label:"Biobizz Top", value:0.0,},
{label:"AHF Grow", value:0.2,},
{label:"AHF Micro", value:0.4,},
{label:"AHF Bloom", value:0.2,},
{label:"Terra Grow", value:0.35,},
{label:"Terra Micro", value:0.5,},
{label:"Terra Bloom", value: 0.2,},
{label:"Remo Grow", value: 0.3,},
{label:"Remo Micro", value: 0.3,},
{label:"Remo Bloom", value: 0.2,},
];
class Form extends React.Component {
  static defaultProps = { value: 0 };

  static propTypes = { value: PropTypes.number };

  state = { a: 0, b: 0, c: 0, d: 0 };

  result = () => this.state.c * this.state.d / this.state.a + this.state.b + this.props.value;

  ppm = () => this.result() * 700

  updateA = e => this.setState({ a: +e.target.value });

  updateB = e => this.setState({ b: +e.target.value });

  updateC = e => this.setState({ c: +e.target.value });

  updateD = e => this.setState({ d: +e.target.value });
 

  render() {
    return (
        <div className="form">
        <h1>Add a substance</h1>
            <form action="">
                <label htmlFor="litres"> Water amount in liters </label><input  onChange={this.updateA} value={this.state.a} type="number"   /><br />
                <label htmlFor="waterec">Water ec </label> <input onChange={this.updateB} value={this.state.b} type="number"  /><br />
                <label htmlFor="nute">Nute ml</label> <input onChange={this.updateC} value={this.state.c} type="number"  /> <br/>
                <label htmlFor="nute">Nute ec</label> <input  onChange={this.updateD} value={this.state.d} type="number" /><br/>
          <select>
            
                {options.map((option) => (
                    <option onChange={this.updateD} value={option.value}>{option.label}</option>))}
                </select>
                </form>
            <br />
            <br />
            <p className="tulos">Total EC: {this.result()}</p>
            <p className="tulos">Total PPM: {this.ppm()}</p>
         
      </div>
    );
  }
}

export default Form;