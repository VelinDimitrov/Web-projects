import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-dark text-white pt-4 mt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <CompanyInfo />
            <SeeMoreSection />
          </div>
        </div>
        <RightsSection />
      </footer>
    );
  }
}

const RightsSection = props => {
  return (
    <div className="footer-copyright text-center py-3">&copy; <span className="year">{new Date().getFullYear()}</span> Всички права запазени:
      <span className="text-white">SanirLTD</span>
    </div>
  );
}
const CompanyInfo = (props) => {
  return (
    <div className="col-md-6 mt-md-0 mt-3 text-center">
      <h5 className="text-uppercase">Как да се свържете с нас</h5>
      <p>Тел.№ +359895537214</p>
      <p>Имейл: sanir@mail.bg</p>
      <p>Адрес: гр. Пловдив, ул. Дилянка 29(До КАТ Пловдив)</p>
    </div>
  );
}

const SeeMoreSection = (props) => {
  return (
    <div className="col-md-6 mb-md-0 mb-3 text-center">
      <h5 className="text-uppercase">виж още</h5>
      <ul className="list-unstyled">
        <li>
          <Link to="/clients" className="text-white">Клиенти и Партньори</Link>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
