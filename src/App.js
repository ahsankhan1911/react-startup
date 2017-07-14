import React from 'react';
  // React Component ↓
class App extends React.Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     txt: 'this is the state txt',
  //     cat: 2
  //   }
  // }

  // update(e) {
  //   this.setState({txt: e.target.value})
  // }
  
  // render() {

  //   let txt = this.props.txt;
  //   return ( 
  //   <div>

  //            <h1>{this.state.txt}</h1>  
  //         <Widget update= {this.update.bind(this)}/>
  //         <Widget update= {this.update.bind(this)}/>
  //         <Widget update= {this.update.bind(this)}/>

      

  //   </div>
  //   )
  // } 

//  render() {
//       return <Button>I <Heart/> <Euro/> React</Button>
//  }
// }

// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {

//   render() {
//     return <span>&hearts;</span>
//   }
// }
// class Euro extends React.Component {

//   render() {
//     return <span>&euro;</span>
//   }









// const Widget = (props) =>
       
//          <input type="text" onChange={props.update}/>



// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "this is the default value"
// }
// const App = () => <h1>hello jaanu</h1>




// Synthetic Events System ↓ 
// constructor() {
//   super();
//   this.state = {currentEvent: '___'}
//   this.update = this.update.bind(this)
// }

// update(e) {
//   this.setState({currentEvent: e.type})
// }
//  render() {
//    return (
//         <div>
//           <textarea 
//           onKeyPress={this.update}
//           onCopy={this.update}
//           cols="30" 
//           rows="10"
//           />
//           <h1>{this.state.currentEvent}</h1>
//         </div>

//    )
//  }
// }
// Synthetic Events System ends




// Custom Proptype Validation ↓
// class Appp2 extends React.Component {
// render() {
//   return <Title />
// }

// }


// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component) {

//     if(!(propName in props)) {
//       return new Error(`missing ${propName}`);
//     }
//   }
// }
// Custom Proptype Validation Ends


constructor() {
  super();
  this.state = {a: ''}
}

update(){
  this.setState({a: this.refs.a.value}, {b: this.refs.b.value})
}
render() {
   return (
        <div>
         <input ref="a" type="text" onChange={this.update.bind(this)} />
         {this.state.a}
         <hr/>
         <input ref="b" type="text" onChange={this.update.bind(this)} />
         {this.state.b}
         
        </div>

   )
 }
}






export default App