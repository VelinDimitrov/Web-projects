import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Specialisation from './Components/Specialisation';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import AboutSection from './Components/AboutSection';

class App extends Component {
    render() {
        let bigSpecInfo = [
            { name: "Ремонт на кранове", src: "./img/rsz_crane.jpg" },
            { name: "Ремонт на вишки", src: "./img/rsz_haulotte.jpg" },
            { name: "Ремонт на трактори", src: "./img/rsz_tracktor.jpg" }
        ];

        let middleSpecInfo = [
            { name: "Ремонт на коли", src: "./img/box-1.jpeg" },
            { name: "Ремонт на скоростни кутии, диференциали", src: "./img/gear.jpeg" },
            { name: "Ремонт на двигатели, рейки", src: "./img/engine.jpeg" },
            { name: "ГНП Дюзи", src: "./img/nozzle.jpg" }
        ];
        let lowerSpecInfo = [
            { name: "Тежкотоварни автомобили", src: "./img/heavy-automobile.jpeg" },
            { name: "Цилиндри, разпределителни клапани", src: "./img/cylinder.jpeg" },
            { name: "Хидравлични помпи", src: "./img/hydraulicpump.jpg" },
            { name: "ПТО редуктори", src: "./img/box-1.jpeg" }
        ];
        let headings = [["Имате проблем?", "Ние Имаме Решение."],
        ["За Нас", "Нашата Дейност и Приоритети"],
        ["Сервиз - Информация"],
        ["Галерия"]
        ];
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={() => <Header logo="./img/rsz_logo.png" headings={headings[0]} />} />
                        <Route path="/about" render={() => <Header logo="./img/rsz_logo.png" headings={headings[1]} />} />
                        <Route path="/shop" render={() => <Header logo="./img/rsz_logo.png" headings={headings[2]} />} />
                        <Route path="/gallery" render={() => <Header logo="./img/rsz_logo.png" headings={headings[3]} />} />
                    </Switch>
                    <Switch>
                        <Route exact path="/" render={() => <Specialisation bigSpecInfo={bigSpecInfo} middleSpecInfo={middleSpecInfo} lowerSpecInfo={lowerSpecInfo} />} />
                        <Route path="/about" component={AboutSection} />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}



export default App;
