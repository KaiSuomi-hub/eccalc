import React from "react";

const options = [
  { label: "Canna Flores", value: 0.5 },
  { label: "Canna Vega", value: 0.4 },
  { label: "Biobizz Grow", value: 0.2 },
  { label: "Biobizz Bloom", value: 0.1 },
  { label: "Biobizz Top", value: 0.0 },
  { label: "AHF Grow", value: 0.2 },
  { label: "AHF Micro", value: 0.4 },
  { label: "AHF Bloom", value: 0.2 },
  { label: "Terra Grow", value: 0.35 },
  { label: "Terra Micro", value: 0.5 },
  { label: "Terra Bloom", value: 0.2 },
  { label: "Remo Grow", value: 0.3 },
  { label: "Remo Micro", value: 0.3 },
  { label: "Remo Bloom", value: 0.2 },
];
class Select extends React.Component {
    constructor(props) {
    super(props);
    this.state = { d: 0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0  };
    this.handleChange = this.handleChange.bind(this);
  }
    render() {
        return (
            <div className="Select">
                 <label htmlFor="nute">Nute ml </label>
          <input
            onChange={this.handleChange}
            value={this.state.c}
            type="number"
            name="c"
          />
          <br />
                <label htmlFor="nute">Nute ec </label>
          <input
            onChange={this.handleChange}
            value={this.state.d}
            type="number"
            name="d"
            step="0.1"
          />
          <br />
            <select onChange={this.handleChange} name="d">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
                </select>
                <br/>
            </div>
        );
    }
}
export default Select;