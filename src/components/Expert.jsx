import React from 'react';

class Expert extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='expert_block'
            >
                <div
                    className='expert'
                >
                    <select>
                        <option>Эксперт</option>
                    </select>
                </div>
                <div
                    className='expert_logo'
                >
                </div>
            </div>
        )
    }
}
export default Expert;