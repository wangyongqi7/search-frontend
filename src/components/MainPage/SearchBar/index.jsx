import {Col, Input, message, Row, Space} from 'antd';
import axios from "axios";
import React from "react";

const {Search} = Input;


const Index = (props) => {

    const {setNewImages, setSearched, searched} = props
    const onSearch = (value) => {

        console.log(value);
        if(value.length!==0){
            axios.get("/api/get_best_images?q=" + value, {
                q: value
            }).then(rsp => {
                if (rsp.status !== 200) {
                    message.error("请求失败")

                } else {
                    setSearched(true)
                    // console.log(rsp.data.results)
                    const newImages = rsp.data.results.map((result) => {
                        const image = result['image_path']
                        console.log(image)
                        return image
                    })

                    setNewImages(newImages)
                    message.success("请求成功")
                }

            }).catch(err => console.log(err))
        }else{
            message.info("输入内容为空")
        }

    }

    return (<Row>
            <Col span={searched?24:12} offset={searched?0:6}>
                <center>
                    <Space direction={searched?"horizontal":"vertical"}>
                        <img alt={"logo.png"} src="logo.png" ></img>

                        <Search
                            placeholder="输入文字开始搜图"
                            allowClear
                            onSearch={onSearch}
                            enterButton={searched?false:true}
                        />
                    </Space>


                </center>

            </Col>
        </Row>

    )
}


export default Index;