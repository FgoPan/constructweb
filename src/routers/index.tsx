import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Menu } from 'antd';
import { menuList } from '../config/';
import { PieChartOutlined } from '@ant-design/icons';

const MainRouter = () => {
    return <Menu mode="inline" theme="dark" style={{ height: '100%' }} >
        {
            menuList.map(item => <Menu.Item key={item.id} icon={<PieChartOutlined />}><Link to={{ pathname: item.path, state: { title: item.name }}}>{item.name}</Link></Menu.Item>)
        }
    </Menu>
}

const MainContent = () => {
    return <Switch>
        {
            menuList.map(item => {
                const Comp = item.component
                return <Route key={item.id} path={item.path}><Comp /></Route>
            })
        }
    </Switch>
}

export {
    MainRouter,
    MainContent
}