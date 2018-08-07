import React from 'react';

const Header = (props) => {
    return (
        <header id="header-section">
            <div className="container text-center py-5 text-white bonus-top-padding">
                <h1 className="display-4">{props.headings[0]}</h1>
                {props.headings[1] && <p className="lead">{props.headings[1]}</p>}
                <img className="logo" src={props.logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;