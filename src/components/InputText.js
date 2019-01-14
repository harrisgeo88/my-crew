import React from 'react'

export default class InputText extends React.Component {
    static defaultProps = {
        value: '',
        name: '',
        type: 'text',
        id: '',
        className: '',
        label: '',
        onChange: null,
        placeholder: ''
    }

    state = {value: ''}

    componentWillMount() {
        this.propsToState(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.propsToState(nextProps)
    }

    propsToState = (props) => {
        this.setState({value: props.value})
    }

    // listener for when user types
    onChange = (input) => {
        let {onChange} = this.props
        let {name, value} = input.target
        if (onChange) {
            onChange(value, name)
        }
        this.setState({value})
    }



    render() {
        let {label, type, id, placeholder, className, name} = this.props
        let {value} = this.state
        return <div>
            {label !== '' && <label>{label}</label>}
            <input  type={type}
                    value={value}
                    name={name}
                    id={id}
                    className={className}
                    placeholder={placeholder}
                    onChange={this.onChange} />
        </div>

    }
}