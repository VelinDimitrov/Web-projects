import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link to="/" className="navbar-brand">SanirLTD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item px-3 active">
                            <Link to="/" className="nav-link">Начало <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item px-3 active">
                            <Link to="/about" className="nav-link">За Нас</Link>
                        </li>
                        <li className="nav-item px-3 active">
                            <Link to="/shop" className="nav-link">Сервиз</Link>
                        </li>
                        <li className="nav-item px-3 active">
                            <Link to="/gallery" className="nav-link">Галерия</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;