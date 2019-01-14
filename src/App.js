import React from 'react'
import axios from 'axios'
import Container from './App/Container'

export default class App extends React.Component {

    state = {
        data: null
    }

    componentWillMount() {
        axios.get('https://randomuser.me/api/?nat=gb&results=5').then((res) => { // get the data from api
            this.setState({
                data: this.cleanupData(res.data.results)
            })
        })
    }

    // function for using only the data we want to use
    cleanupData = (values = []) => {
        if (values.length) {
            let data = {}
            values.forEach((d) => {
                let {picture: {thumbnail}, name: {first, last}, id: {value}, location: {city}} = d
                data[value.replace(/ /g, '')] = {
                    img: thumbnail,
                    name: `${first} ${last}`,
                    city: city,
                    stage: 0 // enum: 0 applied, 1 interviewing, 2 hired
                }
            })
            return data
        }
    }

    // function for changing the interviewing stage of the candidate
    changeStage = (id = '', newStage = 0) => {
        let {data} = this.state
        data[id].stage = newStage
        this.setState({data})
    }

    render() {
        let {data} = this.state
        return <div className="my-crew-app">
            {data && <Container onClick={this.changeStage}
                                filterBy={this.filterBy}
                                {...this.state} />}
            {!data && <div id="content">Loading..</div>}
        </div>
    }
}