
import { connect } from 'react-redux';
import { getUserFromLocalStorage } from '../../store/user.selectors';
import Home from './Home';


//{"name":"Programación","surname":"Surname","tags":"mobile"}

function mapStateToProps(state) {

    console.log ('connect home /index.jsx');

    return {
        user: getUserFromLocalStorage(),
    };
}

export default connect(
    mapStateToProps,
    null,
)(Home);