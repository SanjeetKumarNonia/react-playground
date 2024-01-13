import React from "react"
const Greeting = (Component) => {
    return class Greeting extends React.Component {

        render() {
            return (<Component {...this.props} />)
        }

    }
}

const Mycomponent = ({name})=>{
    return (<div>
      <h1>{name}</h1>
    </div>)
  }

export {Greeting ,Mycomponent } 