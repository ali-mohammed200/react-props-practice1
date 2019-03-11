import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Artist from "./Components/Artist";

class App extends Component {
  render() {
    return (
      <div>
        <Header header="Hey there"/>
        <h1>TEST</h1>
        <Artist imgSrc="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" name="Red" song="BigSong"/>
      </div>
      );
  }
}

export default App;



// 1) Add the correct import and file location for the header Component
// 2) Inside the return of the Class App render function,
//     call the header Component. Difference between an element and a component
//     is that the component is written capital. EX. header vs HEADER
// 3) Props is an object which is included in every component object instance.
//     Props not Prop
// 4) this.props === {} which has a key value
//     EX. props.name = "cats" => props = {name: "cats"}
// 5) To use props: Props can not be changed by the obj instance itself.
//     Only the parent component can change the props key/value passed in.
//     EX. App render() => {<Component props.key=value>}
//     The App calls on the component and passes in a prop with some key value.
//     The props can only be passed in when you instantiate an component
//     passing in props. Any empty prop keys that you don't pass,
//     the prop object will not have that key/value
// 6) Comments in JSX are different. "//" does not work

//
// When writing a new component:
//
// import React from "react"; lowercase r library
// class _____ extends React.Component capital C in Component
//
// Inside the library, we are pulling an object that is exported
// out the of react library, we are naming it
// React. Capital because it is a class.
// It have an obj class called Component. capital C.
// If we extend the wrong class or not have the correct name
// Ex. React.component vs React.Component; it will throw an error,
// "Super Expression must either be null or a function.""
