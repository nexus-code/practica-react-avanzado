import { connect } from 'react-redux';
import AdEdit from './AdEdit';
import { fetchAds } from '../../store/ads/actions'


const mapStateToProps = store => ({
    user: store.user,
    ads: store.ads,
})

const mapDispatchToProps = {
    loadAds: fetchAds,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdEdit);