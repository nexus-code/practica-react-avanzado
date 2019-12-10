import { connect } from 'react-redux';
import Register from './Register';

import { getUser } from '../../store/selectors';
import { setUser } from '../../store/actions';


function mapStateToProps() {
    return {
        user: getUser(),
    };
}


function mapDispatchToProps(dispatch) {
    return {
        setUser: () => dispatch(setUser()),
    };
}

// const mapDispatchToProps = {
//     setUser,
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
