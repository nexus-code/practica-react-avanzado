import { connect } from 'react-redux';
import AdEdit from './AdEdit';

const mapStateToProps = store => ({
    user: store.user,
    ads: store.ads,
})

export default connect(
    mapStateToProps,
    null,
)(AdEdit);
