import { connect } from 'react-redux';
import App from './App';
import { fetchAds } from '../../store/ads/actions'

// function mapDispatchToProps(dispatch) {
//   return {
//     loadAds: () => dispatch(fetchAds()),
//   };
// }

const mapDispatchToProps = {
    loadAds: fetchAds,
};

const mapStateToProps = store => ({
    user: store.user,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
