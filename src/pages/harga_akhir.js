import React from 'react'

export default class HargaAkhir extends React.Component {
    constructor() {
        super()
        this.state = ({
            hargaAwal: 0,
            ppn: 0,
            diskon: 0,
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
        let hargaAwal = this.state.hargaAwal
        let ppn = this.state.ppn / 100
        let diskon = this.state.diskon / 100

        let jumlah1 = hargaAwal * ppn
        let jumlah2 = hargaAwal * diskon 

        let jumlah3 = jumlah2 - jumlah1
        let jumlah = hargaAwal - jumlah3

        this.setState({
            hasil: "Rp. " + jumlah + ",00"
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-success text-light">
                        <h2 className="text-center">Hitung Harga Akhir</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handlerSubmit}>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Harga Awal</p>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="hargaAwal" type="number" value={this.state.hargaAwal} onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>PPN (%)</p>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="ppn" type="number" value={this.state.ppn} onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <p>Diskon (%)</p>
                                </div>
                                <div className="col-8">
                                    <input className="form-control" name="diskon" type="number" value={this.state.diskon} onChange={this.handlerChange} />
                                </div>
                            </div>
                            <button type="submit" className="w-100 btn btn-success mt-4 mb-3 text-light">Hitung</button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <h2 className="text-center mb-3">Harga Akhir</h2>
                        <button className="w-100 alert alert-success" name="result">{this.state.hasil}</button>
                    </div>
                </div>
            </div>
        )
    }
}