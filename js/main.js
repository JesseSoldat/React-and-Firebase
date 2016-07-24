import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


  var App = React.createClass({
  	mixins: [ReactFireMixin],
  	

  	getInitialState: function(){
  		return {
  			items: [],
  			text: ''
  		}
  	},

  	 componentWillMount: function() {
    var firebaseRef = firebase.database().ref('todoApp/items');;
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },


  	handleSubmit: function(e){
  		e.preventDefault();
  		if(this.state.text && this.state.text.trim().length !== 0) {
  			console.log(this.state.text);
  			this.firebaseRefs['items'].push({
  				text: this.state.text
  			});
  			this.setState({
  				text: ''
  			});
  		}
  	},

  	onChange: function(e){
  		this.setState({text: e.target.value});

  	},

 	

  
  render: function(){
  	return(<div>
  			<form onSubmit={this.handleSubmit}>
  				<input onChange={this.onChange} value={this.state.text} />
  				<button>{'Add #' + (this.state.items + 1)}</button>
  			</form>
  		</div>)
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
