import { connect } from 'react-redux';
import Register from './Register';

import { getUser } from '../../store/user.selectors';
import { setUser } from '../../store/user.actions'


function mapStateToProps(state) {
    return {
        user: getUser(state.user),
    };
}


// function mapDispatchToProps(dispatch) {
//     return {
//         setUser: () => dispatch(setUser()),
//     };
// }

const mapDispatchToProps = {
    setUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);