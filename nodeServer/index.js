var mysql = require("mysql");

const express = require('express');
var app = express();

app.use(express.static("./public"))

//axios配置--跨域请求
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

app.get('/',(req,res) => {
    let data = {
        code:"200",
        msg:"成功获取数据",
        goodsData:[
            {
                goodsId:"1101",
                goodsTitle:"安踏御空2019篮球鞋漫威联名SEEED系列60th纪念款鞋NASA高帮球鞋",
                goodsUrl:"http://10.11.17.68:10000/images/goods01.webp",
                goodsPrice:"599",
                goodsYuShou:"预售商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/aaa01.webp","http://10.11.17.68:10000/images/aaa02.webp","http://10.11.17.68:10000/images/aaa03.webp"]
            },
            {
                goodsId:"1102",
                goodsTitle:"正品詹姆斯16代鸳鸯联名篮球鞋king白雄狮浮雕15代猴年限定4欧文5",
                goodsUrl:"http://10.11.17.68:10000/images/goods02.webp",
                goodsPrice:"1099",
                goodsYuShou:"热门商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/bbb01.webp","http://10.11.17.68:10000/images/bbb02.jpg","http://10.11.17.68:10000/images/bbb03.webp"]

            },
            {
                goodsId:"1103",
                goodsTitle:"库里6代篮球鞋雪花低帮圆周率圣诞全明星生日战靴curry5运动鞋男",
                goodsUrl:"http://10.11.17.68:10000/images/goods03.webp",
                goodsPrice:"99",
                goodsYuShou:"预售商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/ccc01.webp","http://10.11.17.68:10000/images/ccc02.webp","http://10.11.17.68:10000/images/ccc03.webp"]
            },
            { 
                goodsId:"1104",
                goodsTitle:"安踏篮球鞋男低帮夏季官网汤普森KT4要疯3战靴轻骑兵鞋子运动鞋男",
                goodsUrl:"http://10.11.17.68:10000/images/goods04.webp",
                goodsPrice:"799",
                goodsYuShou:"精品商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/ddd01.webp","http://10.11.17.68:10000/images/ddd02.webp","http://10.11.17.68:10000/images/ddd03.webp"]
            },
            { 
                goodsId:"1105",
                goodsTitle:"保罗乔治3代曼巴精神联名宇航员4黑人月全明星PG3篮球鞋泡椒炫彩2",
                goodsUrl:"http://10.11.17.68:10000/images/goods05.webp",
                goodsPrice:"499",
                goodsYuShou:"珍藏商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/eee01.webp","http://10.11.17.68:10000/images/eee02.webp","http://10.11.17.68:10000/images/eee03.webp"]
            },
            { 
                goodsId:"1106",
                goodsTitle:"詹姆斯士兵12代篮球鞋LBJ11迷彩高帮战靴AJ1战士联名欧文詹姆斯16",
                goodsUrl:"http://10.11.17.68:10000/images/goods06.webp",
                goodsPrice:"899",
                goodsYuShou:"爆款商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/fff01.webp","http://10.11.17.68:10000/images/fff02.webp","http://10.11.17.68:10000/images/fff03.webp"]
            },
            { 
                goodsId:"1107",
                goodsTitle:"詹姆斯lbj15 实战篮球鞋自然不能少了詹姆斯的球鞋迷彩高帮战靴AJ1战士",
                goodsUrl:"http://10.11.17.68:10000/images/goods07.webp",
                goodsPrice:"489",
                goodsYuShou:"爆款商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/ggg01.jpg","http://10.11.17.68:10000/images/ggg02.webp","http://10.11.17.68:10000/images/ggg03.webp"]
            },
            { 
                goodsId:"1108",
                goodsTitle:"欧文4 以犀利的运球和飘逸的球风吸引了众多的球迷，堪称新生代控卫的代表。作为欧",
                goodsUrl:"http://10.11.17.68:10000/images/goods08.webp",
                goodsPrice:"999",
                goodsYuShou:"爆款商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/hhh01.webp","http://10.11.17.68:10000/images/hhh02.webp","http://10.11.17.68:10000/images/hhh03.webp"]
            },
            { 
                goodsId:"1109",
                goodsTitle:"arden Vol.2 作为哈登个人的第二双签名球风吸引了众多的球迷",
                goodsUrl:"http://10.11.17.68:10000/images/goods09.webp",
                goodsPrice:"1189",
                goodsYuShou:"爆款商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/iii01.webp","http://10.11.17.68:10000/images/iii02.webp","http://10.11.17.68:10000/images/iii03.webp"]
            },
            { 
                goodsId:"1110",
                goodsTitle:"威少2代高帮篮球鞋全明星主场Why Not Zero.2 首发涂鸦鸳鸯黑人月",
                goodsUrl:"http://10.11.17.68:10000/images/goods10.webp",
                goodsPrice:"689",
                goodsYuShou:"爆款商品",
                goodsCount:1,
                isCheck:true,
                isAddShopCar:false,
                details:["http://10.11.17.68:10000/images/jjj01.webp","http://10.11.17.68:10000/images/jjj02.webp","http://10.11.17.68:10000/images/jjj03.webp"]
            },
            

        ]
    }
    res.send(data);
})

// 注册
let registerUser = {};// 保存注册的用户

app.get("/register",(req,res) => {
    res.json({"code":200,"msg":"注册成功"});
    registerUser = req.query;
    console.log("这是注册的用户：",registerUser)
})
// 登陆
app.get("/login",(req,res) => {
    var loginUser = req.query;
    console.log("这是登陆的用户：",loginUser)

    if(loginUser.loginName == registerUser.username && loginUser.loginPassword == registerUser.password){
        res.send("验证成功")
    }else{
        res.send("验证失败")
    }
     
})


app.listen(10000,'10.11.17.68',() => console.log('成功开启服务器：http://10.11.17.68:10000'))