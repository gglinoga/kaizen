import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideNav from "../Sidenav/Sidenav";

const style = {

    user: {
        backgroundColor: "silver",
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: -1
    },

    content: {
        backgroundColor: "white",
        padding: "20px 30px 100px 30px",
        height: "600px",
        align: "center",
    },

    description: {
        fontFamily: "'Questrial', sans-serif",
        fontSize: "30px",
        backgroundColor: "white",
        textAlign: "center",
        overflow: "auto",
        padding: "20px",
    },

}

class User extends Component {


render() {
    return (
        <div>
            <Navbar />
            <SideNav />
            <div style={style.user}>
                <div className="row"></div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" style={style.content}>
                        <div className="row">
                            <div className="col-12 text-center">
                            <p style={style.description}>User Profile</p>
                            <p>Name</p>
                                <p>Email</p>
                                <p>Member Since</p>
                                <br></br>
                                <div className="row">
                                    <div className="col-6 text-center">
                                    <h3><u>Courses Completed</u></h3>
                                    </div>
                                    <div className="col-6 text-center">
                                    <h3><u>Courses In Progress</u></h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
};
}

export default User;
