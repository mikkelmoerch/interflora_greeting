import React from 'react';
import './greeting.scss';

const Greeting = (props) => {
    const { greeting, category } = props.data

    return (
        <div className="greeting">
            <div className="greeting__content">
                <div className="greeting__category">
                    {category.label}
                </div>
                <div className="greeting__greeting">
                    {greeting}
                </div>
            </div>
            <div className="greeting__action">
                <div className="greeting__remove" onClick={() => props.remove(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Greeting