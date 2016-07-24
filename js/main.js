import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import ReactFire from 'reactfire';


var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


  var App = React.createClass({
 	
 	
  
  render: function(){
  	return(<div>App</div>)
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
