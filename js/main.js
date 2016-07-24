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

  var TodoList = React.createClass({
  	render: function(){
  		var _this = this;
  		var createItem = function(item, index){
  			return(
  				<li key={index}>
  					{item.text}
  					<span 
  					style={{color:'red', marginLeft:'10px', cursor:'pointer'}}> X </span>
  				</li>
  			); 	
  		}//createItem
  		return <ul>{this.props.items.map(createItem)}</ul>;
  	} //render
  }); //TodoList

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
  				<button>{'Add #' + (this.state.items.length + 1)}</button>
  			</form>
  			<TodoList items={this.state.items}>
  			</TodoList>

  		</div>)
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
