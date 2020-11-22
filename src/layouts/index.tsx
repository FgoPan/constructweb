import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom'
import { MainRouter, MainContent } from '../routers';
import { UserOutlined } from '@ant-design/icons'
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    const location: any = useLocation();

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }
    return (
        <Layout>
            <Header className="header">
                <div className="app-content">
                    <div className="app-title">数据指标管理平台</div>
                    <div className="app-user-info">
                        <UserOutlined /> Admin
                    </div>
                </div>
            </Header>
            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <MainRouter />
                </Sider>
                <Content style={{ margin: '16px 16px' }}>
                    <Breadcrumb style={{ padding: '16px', marginBottom: '16px', background: 'white' }}>
                        <Breadcrumb.Item>Root</Breadcrumb.Item>
                        <Breadcrumb.Item>{location.state && location.state.title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ padding: '16px 16px', minHeight: 700, background: 'white' }}>
                        <MainContent />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>数据指标管理平台 ©2020 Created by 资产过亿打工人</Footer>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout