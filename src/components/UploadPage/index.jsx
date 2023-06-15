import React from 'react';
import UploaderBlock from "./UploaderBlock";
import {Col, Row} from "antd";

const Index = () => {
    return (
        <Row style={{padding:"10%"}}>
            <Col span={12} offset={6}>
                <UploaderBlock></UploaderBlock>
            </Col>

        </Row>
    );
};

export default Index;