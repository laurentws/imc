import React, { Component } from 'react'

class IMC extends Component {
  state = { masse: 0, taille: 0, imc: null, interpretation: "" }

  handleSubmit = e => {
    e.preventDefault()
    let masse = Number(this.refs.masse.value)
    let taille = Number(this.refs.taille.value)
    let imc = masse / Math.pow(taille, 2)
    let interpretation = this.faireInterpretation(imc)
    this.setState(prevState => ({
      masse,
      taille,
      imc,
      interpretation
    }))
  }

  faireInterpretation = imc => {
    if (imc > 40) {
      return "obésité morbide ou massive"
    }
    if (imc > 35 && imc <= 40) {
      return "obésité sévère"
    }
    if (imc > 30 && imc <= 35) {
      return "obésité modérée"
    }
    if (imc > 25 && imc <= 30) {
      return "surpoids"
    }
    if (imc > 18.5 && imc <= 25) {
      return "poids idéal"
    }
    if (imc > 16.5 && imc <= 25) {
      return "maigreur"
    }
    if (imc <= 16.5 && imc !== null) {
      return "dénutrition ou anorexie"
    }
    return ""
  }

  render() {
    return <div className="imc">
        <div className="imc__box">
        <h1 className="heading-secondary">calcul indice de masse corporelle</h1>
          <div className="form__group">
            <form className="form" onSubmit={this.handleSubmit}>
              <input ref="masse" id="masse" className="form__input" type="number" step="0.01" name="masse" placeholder="Masse" required />
              <label htmlFor="masse" className="form__label">Masse en kg</label>
              <input ref="taille" id="taille" className="form__input" type="number" step="0.01" name="taille" placeholder="Taille" required />
              <label htmlFor="taille" className="form__label">Taille en m</label>
              <button className="btn btn--green u-margin-top-medium  u-margin-bottom-medium" type="submit">
                Calculer
              </button>
            </form>
            {!isNaN(this.state.imc) && this.state.imc !== null && <div className="imc__resultat">
                  IMC = {this.state.imc.toPrecision(4)} kg/m²
                </div>}
            <div className="imc__interpretation">
              {this.state.interpretation}
            </div>
          </div>
        </div>
      </div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <IMC />
      </div>
    )
  }
}

export default App
