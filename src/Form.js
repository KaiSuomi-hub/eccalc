import React from "react";

// import Select from "./Select";
const options = [
  { label: "Valitse", value: 0.0 },
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
  // edited
  state = { showing: true };
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      c2: 0,
      c3: 0,
      c4: 0,
      c5: 0,
      c6: 0,
      c7: 0,
      c8: 0,
      c9: 0,
      c10: 0,
      c11: 0,
      c12: 0,
      c13: 0,
      c14: 0,
      c15: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  }

  render() {
    const result =
      (this.state.c * this.state.d +
        this.state.c2 * this.state.e +
        this.state.c3 * this.state.f +
        this.state.c4 * this.state.g +
        this.state.c5 * this.state.h +
        this.state.c6 * this.state.i +
        this.state.c7 * this.state.j +
        this.state.c8 * this.state.k +
        this.state.c9 * this.state.l +
        this.state.c10 * this.state.m +
        this.state.c11 * this.state.n +
        this.state.c12 * this.state.o +
        this.state.c13 * this.state.p +
        this.state.c14 * this.state.q +
        this.state.c15 * this.state.r) /
        this.state.a +
      this.state.b;
    const ppm = result * 700;
    const { showing } = this.state;

    return (
      <div className="form">
        <h1>Add a substance</h1>
        {/* <form action=""> */}
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
          <div>
            <p>Nute amount </p>
          </div>
          
          {/* ****LEIKKAA TäSTä**** */}
          <button onClick={() => this.setState({ showing: !showing })}>Lisää ravinteita</button><br/>
                { showing 
                    ? <div>
          {/* ****RIVI1**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c}
            type="number"
            name="c"
          />

          {/* <label htmlFor="nute">Nute ec </label> */}
          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.d}
            type="number"
            name="d"
            step="0.1"
          />

          <select onChange={this.handleChange} name="d">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}


          {/* ****RIVI2**** */}

          {/* ****LEIKKAA TäSTä**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c2}
            type="number"
            name="c2"
          />

          {/* <label htmlFor="nute">Nute ec </label> */}
          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.e}
            type="number"
            name="e"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="e">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI3**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c3}
            type="number"
            name="c3"
          />

          {/* <label htmlFor="nute">Nute ec </label> */}
          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.f}
            type="number"
            name="f"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="f">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI4**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c4}
            type="number"
            name="c4"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.g}
            type="number"
            name="g"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="g">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI5**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c5}
            type="number"
            name="c5"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.h}
            type="number"
            name="h"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="h">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI6**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c6}
            type="number"
            name="c6"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.i}
            type="number"
            name="i"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="i">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI7**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c7}
            type="number"
            name="c7"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.j}
            type="number"
            name="j"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="j">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI8**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c8}
            type="number"
            name="c8"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.k}
            type="number"
            name="k"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="k">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI9**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c9}
            type="number"
            name="c9"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.l}
            type="number"
            name="l"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="l">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI10**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c10}
            type="number"
            name="c10"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.m}
            type="number"
            name="m"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="m">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI11**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c11}
            type="number"
            name="c11"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.n}
            type="number"
            name="n"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="n">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI12**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c12}
            type="number"
            name="c12"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.o}
            type="number"
            name="o"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="o">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI13**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c13}
            type="number"
            name="c13"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.p}
            type="number"
            name="p"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="p">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}
{/* edited */}
</div>
                    : null
                }
              
          {/* ****RIVI14**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c14}
            type="number"
            name="c14"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.q}
            type="number"
            name="q"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="q">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}

          {/* ****LEIKKAA TäSTä**** */}

          {/* ****RIVI15**** */}

          <input
            onChange={this.handleChange}
            value={this.state.c15}
            type="number"
            name="c15"
          />

          <input
            className="hidden"
            onChange={this.handleChange}
            value={this.state.r}
            type="number"
            name="r"
            step="0.1"
          />

          {/* <Select/> */}
          <select onChange={this.handleChange} name="r">
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>

          <br />

          {/* ****TäHäN ASTI**** */}
        {/* </form> */}
        <br />
        <br />
        <p className="tulos">
          Total EC:{" "}
          {Number.isNaN(result) ? "Täytä kaikki arvot" : result.toFixed(2)}
        </p>
        <p className="tulos">
          Total PPM: {Number.isNaN(ppm) ? "Täytä kaikki arvot" : ppm.toFixed(2)}
        </p>
      </div>
    );
  }
}

export default Form;
