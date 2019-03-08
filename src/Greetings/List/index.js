import React from 'react';
import './list.scss';
import Greeting from '../Greeting';

const List = (props) => {

    const greetings = props.data.map((item, i) =>(
        <Greeting data={item} key={i} index={i} remove={(index) => props.remove(index)} />
    ))

    const NoGreetings = () => (
        <div className="list__no-greetings">
            Ingen hilsner tilføjet. Hvad venter du på? Tilføj en hilsen ovenfor.
        </div>
    )

    return (
        <div className="list">
            <h2 className="list__title">
                Dine hilsner
            </h2>
            <div className="list__items">
                { props.data && props.data.length > 0
                    ? (
                        <React.Fragment>
                            {greetings}
                        </React.Fragment>
                    )
                    : <NoGreetings />
                }
            </div>
        </div>
    )
}

export default List