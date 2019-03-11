import React, { Component } from 'react';
import Categories from '../Categories';
import './create.scss';

class Create extends Component {
    constructor() {
        super()

        this.state = {
            greeting: '',
            category: '',
            showError: false
        }
    }

    categories = [
        { value: 'friendly', label: 'Venskabelig' },
        { value: 'holiday', label: 'Højtid' },
        { value: 'birthday', label: 'Fødselsdag' },
        { value: 'fun', label: 'For sjov' },
        { value: 'wedding', label: 'Bryllup' }
    ]

    handleInputChange(event) {
        this.setState({ showError: false })

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onCategoryOpen() {
        this.setState({ showError: false })
    }

    onCategoryChange(category) {
        this.setState({ category })
    }

    create() {
        const { greeting, category } = this.state

        if (greeting && greeting !== '' && category && category !== '') {
            this.props.save({ greeting, category })
            this.setState({ greeting: '', category: '' })
        } else {
            this.setState({ showError: true })
        }
    }

    render() {
        return (
            <div className="create">
                <div className="create__box">
                    <div className="create__header">
                        <h2 className="create__title">
                            Tilføj en hilsen med kategori
                        </h2>
                        <p>
                            Lav en liste over tekster med kategorier,<br /> og opdag hvor nemt det er
                        </p>
                    </div>
                    <div className="create__form">
                        <input className="create__input"
                            placeholder="Indtast hilsen"
                            name="greeting"
                            value={this.state.greeting}
                            onChange={(e) => this.handleInputChange(e)} />

                        <Categories options={this.categories}
                            value={this.state.category}
                            onChange={(e) => this.onCategoryChange(e)}
                            onOpen={() => this.onCategoryOpen()}/>

                        { this.state.showError ? <p className="create__error">Ikke alle felter er udfyldt</p> : null }

                        <div className="create__button button" onClick={() => this.create()}>
                            GEM HILSEN
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create