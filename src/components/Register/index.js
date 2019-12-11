import { connect } from 'react-redux';
import Register from './Register';

import { getUser } from '../../store/user/user.selectors';
import { setUser } from '../../store/user/user.actions'

function mapStateToProps() {
    return {
        user: getUser(),
    };
}

const mapDispatchToProps = {
    setUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
