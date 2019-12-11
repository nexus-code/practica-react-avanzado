import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = store => ({
    user: store.user,
})

export default connect(
    mapStateToProps,
    null,
)(App);
