import { connect } from 'react-redux';
import { fetchAds } from '../../store/ads/actions'

import App from './App';

const mapStateToProps = store => ({
    user: store.user,
    ads: store.ads,    
})

export default connect(
    mapStateToProps,
    null,
)(App);
