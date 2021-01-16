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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, c: 0, d: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  }

  render() {
    const result = (this.state.c * this.state.d) / this.state.a + this.state.b;
    const ppm = result * 700;

    return (
      <div className="form">
        <h1>Add a substance</h1>
        <form action="">
          <label htmlFor="litres"> Water amount in liters </label>
          <input
            onChange={this.handleChange}
            value={this.state.a}
            type="number"
            name="a"
          />
          <br />
          <label htmlFor="waterec">Water ec </label>
          <input
            onChange={this.handleChange}
            value={this.state.b}
            type="number"
            name="b"
          />
          <br />
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
        </form>
        <br />
        <br />
        <p className="tulos">
          Total EC:{" "}
          {Number.isNaN(result) ? "Ei Laskettavissa" : result.toFixed(2)}
        </p>
        <p className="tulos">
          Total PPM: {Number.isNaN(ppm) ? "Ei Laskettavissa" : ppm.toFixed(2)}
        </p>
      </div>
    );
  }
}

export default Form;
