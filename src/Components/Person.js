import React, { Component } from "react";

export default class Person extends Component {
    constructor(props) {
    super(props)
    this.person={
        fullname:"Amdouni Oumeyma",
        bio:"this is my Bio",
        profession:"Student",
        imgsrc:"https://cdn.icon-icons.com/icons2/2121/PNG/512/avatar_woman_curly_hair_people_icon_131266.png",
    }
    this.state = {count :0}
}
componentDidMount () {
    setInterval(() => {
        this.setState (prevState=>({
            count: prevState.count+1
        }))
    }, 1000);
}
componentWillUnmount() {
    clearInterval(this.state)
}
render () {
    return (
        <div>
            <div>
                counter:{this.state.count}
            </div>
            <h2>{this.person.fullname}</h2>
            <h2>{this.person.bio}</h2>
            <h2>{this.person.profession}</h2>
            <img src={this.person.imgsrc} alt ="pic"/>

        </div>
    )
} 
}