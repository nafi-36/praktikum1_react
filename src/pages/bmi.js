import React from 'react'

export default class Bmi extends React.Component {
    constructor() {
        super()
        this.state = ({
            berat: 0.0,
            tinggi: 0.0,
            hasil: ""
        })
    }
    handlerChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        let berat = this.state.berat
        let tinggi = this.state.tinggi / 100

        let bmi = berat / (tinggi * tinggi) 

        let status;

        if (bmi <= 18.50) {
            status = "Kekurangan berat badan"
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal (ideal)"
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            status = "Kelebihan berat badan"
        } else if (bmi >= 30.0) {
            status = "Kegemukan (obesitas)"
        }

        this.setState({
            hasil: status
        })
    }

    render() {
        return(
            <div className="container mt-3">
            <div className="card">
                <div className="card-header bg-info text-light">
                    <h2 className="text-center">Body Mass Index</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="row mt-3">
                            <div className="col-4"> 
                                <p>Berat badan (kg)</p>
                            </div>
                            <div className="col-8"> 
                                <input className="form-control" name="berat" type="number" value={this.state.berat} onChange={this.handlerChange} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Tinggi badan (cm)</p>
                            </div>    
                            <div className="col-8"> 
                                <input className="form-control" name="tinggi" type="number" value={this.state.tinggi} onChange={this.handlerChange} />
                            </div>
                        </div>
                        <button type="submit" className="w-100 btn btn-info mt-4 mb-3 text-light">Hitung</button>
                    </form>
                </div>
                <div className="card-footer">
                    <h2 className="text-center mb-3">Hasil</h2>
                    <button className="w-100 alert alert-info" name="result">{this.state.hasil}</button>
                </div>
            </div>
            </div>
        )
    }
}