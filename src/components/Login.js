import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import {Row, Col, Alert} from 'react-bootstrap/'
import {sendLoginTokenRequest} from '../actions'
import { Link } from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      email: "",
      password:"",
      multi: false,
      expiry: 0
    }
  }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked: event.target.value
        });
    }
    static getDerivedStateFromProps (nextProps, prevState){
        if (nextProps.loading !== prevState.loading)
            return {loading: nextProps.loading};
        return null;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.loading !== this.props.loading){
          this.setState({loading: this.props.loading});
        }
      }

    handleSubmit = event => {
        event.preventDefault()
        this.props.sendLoginTokenRequest(this.state)

    }

    render() {
        const {loading} = this.state;
        const {status, message, token} = this.props;
        return (
            <Row className="App-container">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
              <span>User: test@gmail.com, Password: test</span>
            <Alert variant={status !== 'failure'? status : 'danger'} show={message !== ''}>{message}</Alert>
            <Link to={'dataAccess/'+ token} hidden={!token}>Data Access</Link>
            <LoginForm submitHandler={this.handleSubmit} onValueChange={this.handleChange} buttonDisabled={loading}/>
            </Col>
          <Col xs={0} md={3}></Col>
        </Row>)
    }
}

const mapDispatchToProps = dispatch => ({
  sendLoginTokenRequest: userInfo => dispatch(sendLoginTokenRequest(userInfo)),
})

const mapStateToProps = state => ({
  loading: state.loading,
  status: state.status,
  message: state.message,
  token: state && state.data && state.data.token
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);