import React, { Component } from "react";
import list from "../../action/list";

class Main extends Component {
    remove(payload) {
        list.actions.remove(payload).then(() => {
            this.props.get();
        });
    }
    render() {
        return (
            <div className="main">
                <ul>
                    {this.props.list &&
                        this.props.list.map(i => {
                            return (
                                <li
                                    key={i.id}
                                    className="item"
                                    onClick={() => {
                                        this.remove({ id: i.id });
                                    }}
                                >
                                    {i.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default Main;
