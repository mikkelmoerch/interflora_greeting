import React from 'react'
import Select from 'react-select'
import './categories.scss'

const customTheme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
        ...theme.colors,
        primary: '#4f4daa',
        neutral0: '#f8f8f8'
    }
})

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        background: state.isFocused ? '#ececec' : '#f8f8f8',
        fontSize: 16,
        borderWidth: 0
    }),
    indicatorSeparator: () => {},
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: '15px 20px 15px 8px'
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0px 15px',
        height: 'auto'
    }),
    input: (provided) => ({
        ...provided,
        height: 'auto'
    })
}

const Categories = (props) => {
    return (
        <div className="categories">
            <Select options={props.options}
                placeholder="Vælg kategori"
                value={props.value}
                isClearable={true}
                theme={customTheme}
                styles={customStyles}
                onChange={(value) => props.onChange(value)}
                onMenuOpen={() => props.onOpen()}
            />
        </div>
    )
}

export default Categories