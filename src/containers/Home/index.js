import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data } from '../../store/action';
import { facebook_login } from '../../store/action'
import {FacebookLoginButton} from 'react-social-login-buttons'
import {LoginSocialFacebook} from 'reactjs-social-login'


class Home extends React.Component {
    render(){
        console.log(this.props.name)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=> this.props.set_data()}>Click</button>
                <button onClick={()=> this.props.facebook_login()}>Facebook Login</button>
                <LoginSocialFacebook
                appId="1478477436263300"
                onResolve={(response)=>{
                    console.log(response)
                }}
                onReject={(error)=>{
                    console.log(error)
                }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
    facebook_login: () => dispatch(facebook_login())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);