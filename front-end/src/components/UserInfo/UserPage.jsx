import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import UserInfo from "./UserInfo";

const { Content} = Layout;


class UserPage extends React.Component {
    render() {
        return (
            <Layout style={{ background:'#f5f5f5'}}>
                <Content style={{ margin: '0px 16px', textAlign: 'left'}}>
                    <Breadcrumb style={{ margin: '20px 0px' }}>
                    </Breadcrumb>
                    <div style={{ background:'#fff', padding: 24, minHeight: 740,  textAlign: 'left'}}>
                        <UserInfo />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default UserPage;