const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{
            target:"http://localhost:5000",
            changeOrigin:true,
            pathRewrite:{
                "^/api":""
            }
        }),
        createProxyMiddleware("/image",{
            target:"http://localhost:5000",
            changeOrigin:true,
            pathRewrite:{
                "^/image":"/static/data"
            }
        }),
        createProxyMiddleware("/file",{
            target:"http://localhost:9000",
            changeOrigin:true,
            pathRewrite:{
                "^/file":"/file"
            }
        })
    )
}
