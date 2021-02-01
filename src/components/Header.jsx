import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='header'
            >
                <div
                    className='logo'
                >
                </div>
                <div
                    className='beta'
                >Beta</div>
                <div
                    className='bell'
                >
                </div>
                <div
                    className='select_one'
                >
                    <select
                        className='select_name'
                    >
                        <option>Артем</option>
                    </select>
                </div>
                <div
                    className='search'
                >
                </div>
                <div
                    className='select_two'
                >
                    <select
                        className='select_language'
                    >
                        <option>Ru</option>
                        <option>Ua</option>
                        <option>En</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default Header;