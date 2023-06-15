import React, {useState} from 'react';
import {Col, Divider, Popover, Row} from "antd";
import SearchBar from "./SearchBar";
import PhotoBlock from "./PhotoBlock";
import {UpSquareOutlined} from "@ant-design/icons";

const Index = () => {
    const [images, setImages] = useState([])
    const [searched, setSearched] = useState(false);
    const setNewImages = (images) => {
        setImages(images);
    }
    const backTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const initSearchBarConfig = {
        span: 12,
        offset: 6,
        style: {
            padding: "30vh 0 0 0  "
        }

    }
    const showSearchBarConfig = {
        span: 12,
        offset: 0,
        style: {
            padding: "25px 0px 0px 0px"
        }

    }
    const config = searched ? showSearchBarConfig : initSearchBarConfig
    return (<>
            <Row id={"tp"}>
                <Col {...config}>

                    <SearchBar setNewImages={setNewImages} setSearched={setSearched} searched={searched}/>
                </Col>

            </Row>
            {searched ? <><Divider style={{margin: "2px 0px -5px 0px "}}/>
                <Row>
                    <Col span={4} offset={2}>
                        <p style={{color: "#70757a", fontSize: '14px',}}>共返回<span
                            style={{color: "blue"}}>{images.length}</span>张相关图片</p>
                    </Col>
                </Row></> : <></>}

            <Row justify="space-around" gutter={[10, 16]} align={"middle"}>
                <PhotoBlock images={images}></PhotoBlock>
            </Row>

            {searched ?
                <div style={{position: "fixed", right: "40px", bottom: "40px"}}>
                    <Popover content={<p>返回顶部</p>}
                             trigger="hover" >
                        <UpSquareOutlined style={{fontSize: "30px"}} onClick={backTop}/>

                    </Popover>
                </div>


                : <></>}

        </>

    );
};

export default Index;