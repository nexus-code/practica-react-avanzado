import { connect } from 'react-redux';
import Register from './Register';

import { setUser } from '../../store/actions';
import { getUser } from '../../store/selectors';


function mapStateToProps() {
    return {
        user: getUser(),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return dispatch(setUser(ownProps.user))
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
