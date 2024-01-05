import React from 'react';
import Register from "../components/LogIn/Register";
import cover from "../img/R-C.jpg"

let back = {
    width: "100%",
    height: "875px",
    backgroundImage: `url(${cover})`,
    display: "flex",
    alignItems: 'center'
}

class RegisterPage extends React.Component {
    render() {
        return (
            <div style={back}>
                <Register history={this.props.history}/>
            </div>
        )
    }
}

export default RegisterPage;