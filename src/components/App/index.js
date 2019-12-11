import { connect } from 'react-redux';
import App from './App';



const mapStateToProps = store => ({
    a: console.log('store in App', store),

    user: store.user,
    ads: store.ads,
})

export default connect(
    mapStateToProps,
    null,
)(App);
