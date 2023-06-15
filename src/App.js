import './App.css';
import {useNavigate, useRoutes} from "react-router-dom";
import routes from "./routes";
import {Content, Header} from "antd/es/layout/layout";
import {Button, Layout, Menu} from "antd";
import {CloudUploadOutlined, SearchOutlined} from "@ant-design/icons";

function App() {
    const element = useRoutes(routes);
    const navigate = useNavigate();

    const handleClick = (e)=>{
        console.log("trigger handleClick")
        if(e.key === "upload")
        {
            navigate("/upload")
        }else if (e.key === 'search'){
            navigate("/index")
        }
    }
    return (<Layout  style={{minHeight:"100vh",maxWidth:"100vw"}}>
          <Header style={{background:"#ffffff"}}>
            <Menu  onClick={handleClick} mode="horizontal" style={{width:"100%"}}>
                <Menu.Item key="search">

                    <Button><SearchOutlined/>搜索</Button>
                </Menu.Item>
                <Menu.Item key="upload" >

                    <Button><CloudUploadOutlined/>上传图片</Button>
                </Menu.Item>
            </Menu>
          </Header>
          <Content>
              <div  style={{background:"#f7f7f7"}} >
                  {element}
              </div>
          </Content>

      </Layout>


  );
}

export default App;
