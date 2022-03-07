import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><b>PRAKTIKUM 1</b></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bmi">BMI</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cicilan">Cicilan</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/hargaakhir">Harga Akhir</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Konversi Bilangan
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link className="dropdown-item" to="/biner">Konversi Bilangan Biner</Link></li>
                      <li><Link className="dropdown-item" to="/oktal">Konversi Bilangan Oktal</Link></li>
                      <li><Link className="dropdown-item" to="/desimal">Konversi Bilangan Desimal</Link></li>
                      <li><Link className="dropdown-item" to="/hexadesimal">Konversi Bilangan Hexadesimal</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}