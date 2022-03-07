import React from 'react'

export default class Biner extends React.Component {
    constructor() {
        super()
        this.state = ({
            biner: "",
            konversi: "",
            hasil: ""
        })
    }
    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        let biner = this.state.biner
        let konversi = this.state.konversi 
        
        let bil = Number(biner)
        let dcml = parseInt(bil, 2)
        let jumlah;
        
        if (konversi === "oktal") {
            jumlah = dcml.toString(8)
        } else if (konversi === "desimal") {
            jumlah = dcml
        } else if (konversi === "hexadesimal") {
            jumlah = dcml.toString(16).toUpperCase()
        }

        this.setState({
            hasil: jumlah
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-danger text-light">
                        <h2 className="text-center">Konversi Bilangan Biner</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handlerSubmit}>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Biner</p>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="biner" type="number" value={this.state.biner} onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Pilihan Konversi</p>
                                </div>
                                <div className="col-8">
                                    <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.handlerChange} required>
                                        <option></option>
                                        <option value="oktal">Oktal</option>
                                        <option value="desimal">Desimal</option>
                                        <option value="hexadesimal">Hexadesimal</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="w-100 btn btn-danger mt-4 mb-3 text-light">Convert</button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <h2 className="text-center mb-3">Hasil</h2>
                        <button className="w-100 alert alert-danger" name="result">{this.state.hasil}</button>
                    </div>
                </div>
            </div>
        )
    }
}