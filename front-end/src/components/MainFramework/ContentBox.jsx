import React from 'react';
import {Layout} from 'antd';
import {Route, Switch} from "react-router";
import UserPage from "../UserInfo/UserPage";
import DeviceConfiguration from "../Device/DeviceConfig/DeviceConfiguration";
import DevicePosition from "../Device/DeviceMapShow/DevicePosition";
import DeviceStatisticInfo from "../Device/DeviceMetaStatistic/DeviceStatisticInfo";
import MessageValueShow from "../Device/MessageStatistic/MessageValueShow";

const { Content} = Layout;

class ContentBox extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/main/user"} component={UserPage} />
                <Route exact path={"/main/config"} component={DeviceConfiguration} />
                <Route exact path={"/main/show"} component={DevicePosition} />
                <Route exact path={"/main/statistic"} component={DeviceStatisticInfo} />
                <Route exact path={"/main/message"} component={MessageValueShow} />
            </Switch>
        );
    }
}

export default ContentBox;