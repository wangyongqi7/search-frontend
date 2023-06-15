import './App.css';
import {useNavigate, useRoutes} from "react-router-dom";
import routes from "./routes";
import {Content, Header} from "antd/es/layout/layout";
import {Layout, Menu} from "antd";
import Icon from "antd/es/icon";

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
                    <Icon type="search" />
                    搜索
                </Menu.Item>
                <Menu.Item key="upload" >
                    <Icon type="upload" />
                    上传图片
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
