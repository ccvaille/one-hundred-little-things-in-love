import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import list from "./action/list";

import "./assets/index.css";

class App extends Component {
    state = {
        things: []
    };
    componentDidMount() {
        this.getList();
    }
    getList = () => {
        list.actions.get().then(res => {
            this.setState({
                things: res.data
            });
        });
    };
    render() {
        return (
            <div className="App">
                <Header list={this.state.things} get={this.getList} />
                <Main list={this.state.things} get={this.getList} />
                <Footer />
            </div>
        );
    }
}

export default App;
