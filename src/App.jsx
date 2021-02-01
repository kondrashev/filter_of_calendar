import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Expert from './components/Expert';
import Menu from './components/Menu';
import LeftPanel from './components/LeftPanel';

const StartApplication = () => {
    const App = () => (
        <div
            className='main_page'
        >
            <div
                className='modal_window'
            ></div>
            <Header />
            <Expert />
            <Menu />
            <LeftPanel />
        </div>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default StartApplication;