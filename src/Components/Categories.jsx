import React from 'react'
export class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"All Cars"
                },
                {
                    key:"BMW",
                    name:"BMW"
                },
                {
                    key:"MERCEDES",
                    name:"MERCEDES"
                },
                {
                    key:"VOLKSWAGEN",
                    name:"VOLKSWAGEN"
                },
                {
                    key:"AUDI",
                    name:"AUDI"
                },
                {
                    key:"PORSHE",
                    name:"PORSHE"
                },
                
            ]
        }
    }
    render() {
        return(
            <div className = "categories">
                {this.state.categories.map(el => (
                        <div key = {el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }

}

export default Categories