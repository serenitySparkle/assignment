import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Alert, Card, ListGroup} from 'react-bootstrap/'
import {sendAuthRequest} from '../actions'

class DataAccess extends Component {

    constructor(props) {
        super(props)
        this.state = {
      loading: false
        }
    }

    componentDidMount () {
    const {token} = this.props.match.params;
    this.props.sendAuthRequest(token || '')
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

    render() {
        const {loading} = this.state;
        const {status, message, userData} = this.props;
        return (
            <Row className="App-container">
            <Col xs={0} md={3}></Col>
            <Col xs={12} md={6}>
            <Alert variant={status!=='failure'? status : 'danger'} show={message !== ''}>{message}</Alert>
            <div hidden={!loading}>Loading...</div>
            <div hidden={userData === undefined} className="flex-center">
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="flex-between"><span className="info-title">First Name</span>{userData && userData.fname}</ListGroup.Item>
                        <ListGroup.Item className="flex-between"><span className="info-title">Last Name</span>{userData && userData.lname}</ListGroup.Item>
                        <ListGroup.Item className="flex-between"><span className="info-title">Email</span>{userData && userData.email}</ListGroup.Item>
                        <ListGroup.Item className="flex-between"><span className="info-title">Gender</span>{userData && userData.gender}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            </Col>
          <Col xs={0} md={3}></Col>
        </Row>)
    }
}

const mapDispatchToProps = dispatch => ({
  sendAuthRequest: userInfo => dispatch(sendAuthRequest(userInfo)),
})

const mapStateToProps = state => ({
  loading: state.loading,
  status:  state.status,
  message: state.message,
  userData: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(DataAccess);