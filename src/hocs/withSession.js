import { connect } from 'react-redux';

import { getUser } from '../store/user/selectors';
import { setUser } from '../store/user/actions'

const mapStateToProps = (store, ownProps) => ({
    user: getUser(store),
    ownProps,
});

const mapDispatchToProps = {
    setUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);