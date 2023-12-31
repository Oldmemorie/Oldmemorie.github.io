module.exports = {
    //这里是将config.js中的社交信息部分单独提取出来，方便配置
    socials: [
        {
          
            // imgSrc: "/img/ico/qq.svg", 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置

            //true为在首页显示，反之
            isHome: false,

            //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
            show: false,

            //是否在侧边栏显示
            sidebar: false,

            //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
            symbol: '#icon-qq',

            //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
            // showImgSrc: "https://ooszy.cco.vin/img/blog-public/wechat.jpg",
        },
     
    ]
}
