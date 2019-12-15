import { connect } from 'react-redux';
import AdEdit from './AdEdit';
import { savedAd } from '../../store/ads/actions'


const mapStateToProps = store => ({
    user: store.user,
    ads: store.ads,
})


function mapDispatchToProps(dispatch, ad, method, id) {
  return {
    //   savedAd: () => dispatch(savedAd(ad, method, id))
      savedAd: dispatch(savedAd(ad, method, id)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdEdit);