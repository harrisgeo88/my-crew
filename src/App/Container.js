import React from 'react'
import Card from '../components/Card'
import GridItem from '../components/GridItem'
import InputText from '../components/InputText'

export default class Container extends React.Component {

    state = {
        filteredData: null,
        name: '',
        city: ''
    }

    componentWillMount() {
        this.propsToState(this.props)
    }

    componentWillReceiveProps(props) {
        this.propsToState(props)
    }

    // updates the state before first renders and when props update
    propsToState = (props) => {
        this.setState({filteredData: this.props.data})
    }

    // resets the "name" and "city" filters
    resetFilters = () => {
        this.setState({
            name: '',
            city: '',
            filteredData: this.props.data
        })
    }

    // function for filtering by input field and value
    filterBy = (value="", name = "") => {
        let newData = {}
        let {filteredData} = this.state
        let candidate, id, field
        if (value !== "") {
            // i would use lodash for that but tried to avoid boilerplate code
            Object.entries(filteredData).forEach((d) => {
                id = d[0]
                candidate = d[1]
                field = candidate[name].toLowerCase()
                if (field.startsWith(value)) {
                    newData[id] = candidate
                }
            })
        }
        else
            newData = this.props.data

        this.setState({filteredData: newData, [name]: value})
    }

    // renders candidates
    renderData = (data) => {
        let {onClick} = this.props
        let id = ''
        let candidate = {}
        let stages = ['applied', 'interviewing', 'hiring'] // the 3 categories
        return stages.map((stage, i) => { // render people inside each of the categories
            return <GridItem key={i} content={Object.entries(data).map((d) => {
                id = d[0]
                candidate = d[1]
                if (candidate.stage === i) {
                    return <Card    key={id}
                                    id={id}
                                    onClick={onClick}
                                    {...candidate} />
                }
                else
                    return null
            })} />
        })
    }

    render() {
        let {filteredData, name, city} = this.state
        return <div>
            <button className="filters" onClick={this.resetFilters}>Reset</button>
            <InputText  className="filters"
                        placeholder="Filter by city..."
                        name="city"
                        value={city}
                        onChange={this.filterBy}/>
            <InputText  className="filters"
                        placeholder="Filter by name..."
                        name="name"
                        value={name}
                        onChange={this.filterBy}/>
            <div className="grid">
                <GridItem content="Applied" />
                <GridItem content="Interviewing" />
                <GridItem content="Hired" />
                {this.renderData(filteredData)}
            </div>
        </div>
    }
}