import React from "react";
import {Layout} from "antd";

const Footer = Layout;

export default class MainFooter extends React.Component {
    render(){
        return (
            <Footer style={{ textAlign: 'center' }}>
                Made by JiaHaoLi in 2023
            </Footer>
        );
    }
}