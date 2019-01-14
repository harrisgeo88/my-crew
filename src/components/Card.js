import React from 'react'

export default class Card extends React.Component {

    static defaultProps = {
        name: '',
        img: '',
        city: '',
        id: '',
        onClick: null,
        stage: 0 // enum: 0 applied, 1 interviewing, 2 hired
    }

    // renders buttons with actions for candidate state
    renderActions = () => {
        let {stage, onClick, id} = this.props
        let goForward = false
        let goBack = false
        switch(stage) {
            case 1:
                goForward = true
                goBack = true
                break
            case 2:
                goBack = true
                break
            default:
                goForward = true
                break
        }
        return <div className="candidate-card-actions">
            {goBack && <button onClick={() => onClick(id, stage-=1)}>&#9664;</button>}
            {goForward && <button onClick={() => onClick(id, stage+=1)}>&#9654;</button>}
        </div>
    }

    render() {
        let {img, name, city} = this.props
        return <div className="candidate-card">
            <img className="candidate-card-image" src={img} alt="candidate-img" />
            <div className="candidate-card-title">{name}</div>
            <div className="candidate-card-city">{city}</div>
            {this.renderActions()}
        </div>
    }
}