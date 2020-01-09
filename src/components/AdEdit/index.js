import { connect } from 'react-redux';
import AdEdit from './AdEdit';
import { savedAd } from '../../store/ads/actions';


const mapStateToProps = (store) => ({
    user: store.user,
    ads: store.ads,
})

const mapDispatchToProps = dispatch => ({
    savedAd: (ad, method) => dispatch(savedAd(ad, method)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdEdit);