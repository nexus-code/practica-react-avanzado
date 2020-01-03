import { connect } from 'react-redux';
import Register from './Register';

import { getUser } from '../../store/user/selectors';
import { setUser } from '../../store/user/actions'

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    setUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
