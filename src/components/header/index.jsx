import React, { Component } from "react";
import { Modal, Icon, Input } from "antd";
import list from "../../action/list";

class Header extends Component {
    state = {
        modalVisible: false,
        listTitle: ""
    };
    addAction() {
        const payload = {
            id: this.props.list.length + 1,
            title: this.state.listTitle
        };
        list.actions.add(payload).then(() => {
            this.props.get();
            this.setModalVisible(false);
            this.setState({
                listTitle: ""
            });
        });
    }
    setModalVisible(payload) {
        this.setState({
            modalVisible: payload
        });
    }
    setListTitle(e) {
        this.setState({
            listTitle: e.target.value
        });
    }
    render() {
        return (
            <header>
                100 件小事
                <div className="add-list">
                    <Icon
                        type="plus-circle"
                        theme="twoTone"
                        onClick={() => this.setModalVisible(true)}
                    />
                </div>
                <Modal
                    title="create"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.addAction()}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <Input
                        value={this.state.listTitle}
                        onChange={e => {
                            this.setListTitle(e);
                        }}
                    />
                </Modal>
            </header>
        );
    }
}

export default Header;
