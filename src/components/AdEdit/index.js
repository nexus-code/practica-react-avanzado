import { connect } from 'react-redux';
import AdEdit from './AdEdit';
import { savedAd } from '../../store/ads/actions';


const mapStateToProps = (store, ownProps) => ({
    user: store.user,
    ads: store.ads,
    ownProps,
})

const mapDispatchToProps = dispatch => ({
    savedAd: (ad, method) => dispatch(savedAd(ad, method)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdEdit);