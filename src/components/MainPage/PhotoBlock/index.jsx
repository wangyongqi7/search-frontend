import React from 'react';
import {Col} from 'antd';

const Index = (props) => {
    const {images} = props
    console.log(images)
    images.map((image) => {
        console.log("/api/static/data/" + image)
        return image
    })
    return <>
        {images.map((image) => {
            console.log(image)
            return <Col span={4}>
                    <div style={{background:"lightblue",width:"90%",height:"100%",margin:"0 5%" ,padding:"10px 8px ",borderRadius:"10px"}}>
                        <img alt={image} src={"/image/" + image} style={{maxWidth: "100%", maxHeight: "100%",borderRadius:"5px"}}/>
                    </div>
            </Col>
        })
            }

            </>

        };


        export default Index;