import React from 'react'
import './main.css';

function SelectableInputCarret() {
    return (<i className="selectable-input-carret" ></i>);
}

class SelectableInput extends React.Component {

    render() {
        return (<>
            <input className="selectable-input" value={this.props.value} placeholder="SELECT" />
            <SelectableInputCarret />
        </>);
    }
}

function SelectableListItem(d) {
    return (<div className="selectable-list-item" key={d.id} id={d.id} >{d.text}</div>);
}

function SelectableList(props) {

    const data = [
        { id: 0, text: "POMP" },
        { id: 1, text: "DAT" },
        { id: 3, text: "SHIET" },
        { id: 4, text: "ROUND" },
        { id: 5, text: "ALL NITE LONG LOSE CONTROL" },
    ]

    const optionList = data.map(o => SelectableListItem(o))

    if (props.isOpened) {
        return (<div className="selectable-list" >{optionList} </div>);
    } else {
        return (<></>);
    }
}


class Selectable extends React.Component {

    constructor() {
        super()

        this.props = {
            value: null,
            isOpened: true,
            isMultiSelect: false,
        }

    }

    render() {
        return (<div className="selectable-wrapper" >
            <SelectableInput value={this.props.value} />
            <SelectableList isOpened={this.props.isOpened} />
        </div>);
    }
}

export default Selectable;