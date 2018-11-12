import React, { Component } from "react";
import axios from "axios";
const wavArtAxios = axios.create();

wavArtAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AuthContext = React.createContext();

export class AuthContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            art: [],
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            errorMessage: "",
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }

        this.getArt = this.getArt.bind(this);
        this.addArt = this.addArt.bind(this);
        this.deleteArt = this.deleteArt.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);





    }

    componentDidMount() {
    }

    getArt = () => {
        return wavArtAxios.get("/api/art")
            .then(response => {
                this.setState({ art: response.data });
                return response;
            })
    }


    addArt = (newArt) => {
        return wavArtAxios.post("/api/art/", newArt)
            .then(response => {
                this.setState(prevState => {
                    return { art: [...prevState.art, response.data] }
                });
                return response;
            })
    }


    deleteArt = (artId) => {
        return wavArtAxios.delete(`/api/art/${artId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedArt = prevState.art.filter(todo => {
                        return todo._id !== artId
                    })
                    return { art: updatedArt }
                })
                return response;
            })
    }


    register = (userInfo) => {
        return wavArtAxios.post("/auth/register", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return wavArtAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                // this.getArt();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    getArt: this.getArt,
                    addArt: this.addArt,
                    deleteArt: this.deleteArt,
                    register: this.register,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AuthContext.Provider>
        )
    }
}

export const withAuthContext = Component => {
    return props => {
        return (
            <AuthContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}
