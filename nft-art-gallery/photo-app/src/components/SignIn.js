import React from 'react';
import '../App.css';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: (result) => false
      }
    };
    this.state = {
      isSignedIn: false
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.isSignedIn ? <Redirect to={{ pathname: "/gallery" }} /> :
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title">
                      <h2 className="title">Sign In</h2>
                    </div>
                    <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                  </div>
                </div>
              </div>
            </div>
        }
      </div >
    );
  }
}
export default SignIn;