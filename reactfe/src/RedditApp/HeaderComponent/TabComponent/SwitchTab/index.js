import React, {Component} from 'react'
import Context from "../../../../provider";
import {
    Container,
    TabContent,
    TabPane,
} from "reactstrap";
import Home from '../../../BodyComponent/ContentComponent/SubredditComponent/Home'
import Popular from '../../../BodyComponent/ContentComponent/SubredditComponent/Popular'
import All from '../../../BodyComponent/ContentComponent/SubredditComponent/All'

export default class SwitchTab extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <Container>
                            <TabContent activeTab={context.activeTab}>
                                <TabPane tabId="1">
                                    <Home />
                                </TabPane>
                                <TabPane tabId="2">
                                    <Popular />
                                </TabPane>
                                <TabPane tabId="3">
                                    <All />
                                </TabPane>
                            </TabContent>   
                        </Container>
                    )
                }}
            </Context.Consumer>
        )
    }
}