import React from 'react'
import Home from './pages/home'
import Bmi from './pages/bmi'
import Cicilan from './pages/cicilan'
import HargaAkhir from './pages/harga_akhir'
import Biner from './pages/biner'
import Oktal from './pages/oktal'
import Desimal from './pages/desimal'
import Hexadesimal from './pages/hexadesimal'
import { Route, Switch } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bmi} />
                <Route path="/cicilan" component={Cicilan} />
                <Route path="/hargaakhir" component={HargaAkhir} />
                <Route path="/biner" component={Biner} />
                <Route path="/oktal" component={Oktal} />
                <Route path="/desimal" component={Desimal} />
                <Route path="/hexadesimal" component={Hexadesimal} />
            </Switch>
        )
    }
}