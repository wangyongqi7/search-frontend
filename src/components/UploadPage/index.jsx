import React from 'react';
import UploaderBlock from "./UploaderBlock";
import {Col, Row} from "antd";

const Index = () => {
    return (
        <Row style={{margin:"30%"}}>
            <Col span={12} offset={6}>
                <UploaderBlock></UploaderBlock>
            </Col>

        </Row>
    );
};

export default Index;