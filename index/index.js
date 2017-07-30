/**
 * Created by fy10858 on 2015/8/31.
 */
var Index = {};
(function () {
    var sliderD1 = true;
    var sliderN1 = 0;
    var sliderD2 = true;
    var sliderN2 = 0;
    //总数据
    var yidatas = [{
            school: "阿坝师范学院",
            link: 'http://www.abtc.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/阿坝师范学院.jpg"
        }, {
            school: "安徽师范大学",
            link: 'http://www.ahnu.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安徽师范大学.jpg"
        }, {
            school: "安徽师范大学皖江学院",
            link: 'http://wjcollege.ahnu.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安徽师范大学皖江学院.jpg"
        }, {
            school: "安康学院",
            link: 'http://www.aku.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安康学院.jpg"
        }, {
            school: "安庆师范学院",
            link: 'http://www.aqnu.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安庆师范学院.jpg"
        }, {
            school: "安顺学院",
            link: 'http://www.asu.edu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安顺学院.jpg"
        }, {
            school: "安阳师范学院",
            link: 'http://www.aynu.edu.cn/',
            key: 'a',
            type: 3,
            logo: "img/shu/安阳师范学院.jpg"
        }, {
            school: "安阳学院",
            link: 'http://www.ayrwedu.cn/',
            key: 'a',
            type: 1,
            logo: "img/shu/安阳学院.jpg"
        }, {
            school: "鞍山师范学院",
            link: 'http://www.asnc.edu.cn/',
            key: 'a',
            type: 3,
            logo: "img/shu/鞍山师范学院.jpg"
        },
        {
            school: "白城师范学院",
            link: 'http://www.bcsfxy.com/',
            key: 'b',
            type: 1,
            logo: "img/shu/白城师范学院.jpg"
        }, {
            school: "宝鸡文理学院",
            link: 'http://www.bjwlxy.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/宝鸡文理学院.jpg"
        }, {
            school: "保定学院",
            link: 'http://www.bdu.edu.cn/',
            key: 'b',
            type: 4,
            logo: "img/shu/保定学院.jpg"
        }, {
            school: "保山学院",
            link: 'http://www.bsnc.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/保山学院.jpg"
        }, {
            school: "北华大学",
            link: 'http://www.beihua.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/北华大学.jpg"
        }, {
            school: "北京大学",
            link: 'http://www.pku.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/北京大学.jpg"
        }, {
            school: "北京电影学院",
            link: 'http://www.bfa.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/北京电影学院.jpg"
        }, {
            school: "北京交通大学",
            link: 'http://www.njtu.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/北京交通大学.jpg"
        }, {
            school: "北京师范大学",
            link: 'http://www.bnu.edu.cn/',
            key: 'b',
            type: 3,
            logo: "img/shu/北京师范大学.jpg"
        }, {
            school: "北京印刷学院",
            link: 'http://www.bigc.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/北京印刷学院.jpg"
        }, {
            school: "滨州学院",
            link: 'http://www.bztc.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/滨州学院.jpg"
        }, {
            school: "渤海大学",
            link: 'http://www.bhu.edu.cn/',
            key: 'b',
            type: 1,
            logo: "img/shu/渤海大学.jpg"
        },
        {
            school: "沧州师范学院",
            link: 'http://www.caztc.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/沧州师范学院.jpg"
        }, {
            school: "昌吉学院",
            link: 'http://www.cjc.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/昌吉学院.jpg"
        }, {
            school: "常熟理工学院",
            link: 'http://www.cslg.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/常熟理工学院.jpg"
        }, {
            school: "常州大学",
            link: 'http://www.cczu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/常州大学.jpg"
        }, {
            school: "巢湖学院",
            link: 'http://www.chtc.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/巢湖学院.jpg"
        }, {
            school: "成都理工大学",
            link: 'http://www.cdut.edu.cn/default.html',
            key: 'c',
            type: 1,
            logo: "img/shu/成都理工大学.jpg"
        }, {
            school: "成都师范学院",
            link: 'http://www.cdnu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/成都师范学院.jpg"
        }, {
            school: "池州学院",
            link: 'http://www.czu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/池州学院.jpg"
        }, {
            school: "赤峰学院",
            link: 'http://www.cfxy.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/赤峰学院.jpg"
        }, {
            school: "滁州学院",
            link: 'http://www.chzu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/滁州学院.jpg"
        }, {
            school: "长春科技学院",
            link: 'http://www.jlaudev.com.cn/index.php',
            key: 'c',
            type: 1,
            logo: "img/shu/长春科技学院.jpg"
        }, {
            school: "长春理工大学光电信息学院",
            link: 'http://www.csoei.com/',
            key: 'c',
            type: 1,
            logo: "img/shu/长春理工大学光电信息学院.jpg"
        }, {
            school: "长春师范大学",
            link: 'http://www.ccsfu.edu.cn/',
            key: 'c',
            type: 3,
            logo: "img/shu/长春师范大学.jpg"
        }, {
            school: "长江大学",
            link: 'http://www.yangtzeu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/长江大学.jpg"
        }, {
            school: "长江师范学院",
            link: 'http://www.yznu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/长江师范学院.jpg"
        }, {
            school: "长沙师范学院",
            link: 'http://www.cssf.cn/',
            key: 'c',
            type: 3,
            logo: "img/shu/长沙师范学院.jpg"
        }, {
            school: "长治学院",
            link: 'http://www.czc.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/长治学院.jpg"
        }, {
            school: "重庆大学",
            link: 'http://www.cqu.edu.cn/v1/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆大学.jpg"
        }, {
            school: "重庆第二师范学院",
            link: 'http://www.cque.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆第二师范学院.jpg"
        }, {
            school: "重庆人文科技学院",
            link: 'http://www.cqrk.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆人文科技学院.jpg"
        }, {
            school: "重庆三峡学院",
            link: 'http://www.sanxiau.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆三峡学院.jpg"
        }, {
            school: "重庆师范大学",
            link: 'http://www.cqnu.edu.cn/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆师范大学.jpg"
        }, {
            school: "重庆文理学院",
            link: 'http://www.cqwu.net/',
            key: 'c',
            type: 1,
            logo: "img/shu/重庆文理学院.jpg"
        }, {
            school: "楚雄师范学院",
            link: 'http://www.cxtc.edu.cn/',
            key: 'c',
            type: 3,
            logo: "img/shu/楚雄师范学院.jpg"
        },
        {
            school: "大理大学",
            link: 'http://www.dali.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/大理大学.jpg"
        }, {
            school: "大连大学",
            link: 'http://www.cqnu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/大连大学.jpg"
        }, {
            school: "大连工业大学",
            link: 'http://www.dlpu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/大连工业大学.jpg"
        }, {
            school: "大连工业大学艺术与信息工程学院",
            link: 'http://www.caie.org/',
            key: 'd',
            type: 1,
            logo: "img/shu/大连工业大学艺术与信息工程学院.jpg"
        }, {
            school: "大连外国语大学",
            link: 'http://www.dlufl.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/大连外国语大学.jpg"
        }, {
            school: "大连艺术学院",
            link: 'http://www.dac.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/大连艺术学院.jpg"
        }, {
            school: "大庆师范学院",
            link: 'http://www.dqsy.net/',
            key: 'd',
            type: 1,
            logo: "img/shu/大庆师范学院.jpg"
        }, {
            school: "德州学院",
            link: 'http://www.dzu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/德州学院.jpg"
        }, {
            school: "东北师范大学",
            link: 'http://www.nenu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/东北师范大学.jpg"
        }, {
            school: "东北师范大学人文学院",
            link: 'http://www.chsnenu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/东北师范大学人文学院.jpg"
        }, {
            school: "东南大学",
            link: 'http://www.seu.edu.cn/',
            key: 'd',
            type: 1,
            logo: "img/shu/东南大学.jpg"
        },
        {
            school: "福建工程学院",
            link: 'http://www.fjut.edu.cn/',
            key: 'f',
            type: 1,
            logo: "img/shu/福建工程学院.jpg"
        }, {
            school: "福建师范大学",
            link: 'https://www.fjnu.edu.cn/',
            key: 'f',
            type: 1,
            logo: "img/shu/福建师范大学.jpg"
        }, {
            school: "福建师范大学协和学院",
            link: 'http://cuc.fjnu.edu.cn/',
            key: 'f',
            type: 1,
            logo: "img/shu/福建师范大学协和学院.jpg"
        }, {
            school: "福州外语外贸学院",
            link: 'http://www.fzfu.com/',
            key: 'f',
            type: 1,
            logo: "img/shu/福州外语外贸学院.jpg"
        }, {
            school: "阜阳师范学院",
            link: 'http://www.fync.edu.cn/ch2009/index.html',
            key: 'f',
            type: 1,
            logo: "img/shu/阜阳师范学院.jpg"
        },
        {
            school: "甘肃民族师范学院",
            link: 'http://www.gnun.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/甘肃民族师范学院.jpg"
        }, {
            school: "赣南师范大学",
            link: 'http://www.gnnu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/赣南师范大学.jpg"
        }, {
            school: "赣南师范学院科技学院",
            link: 'http://ky.gnnu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/赣南师范学院科技学院.jpg"
        }, {
            school: "广东第二师范学院",
            link: 'http://www.gdei.edu.cn/2014/',
            key: 'g',
            type: 1,
            logo: "img/shu/广东第二师范学院.jpg"
        }, {
            school: "广东工业大学",
            link: 'http://www.gdut.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广东工业大学.jpg"
        }, {
            school: "广东海洋大学",
            link: 'http://www.gdou.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广东海洋大学.jpg"
        }, {
            school: "广东技术师范学院",
            link: 'http://www.gpnu.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广东技术师范学院.jpg"
        }, {
            school: "广西大学",
            link: 'http://www.gxu.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广西大学.jpg"
        }, {
            school: "广西大学行健文理学院",
            link: 'http://xingjian.gxu.edu.cn/index.aspx',
            key: 'g',
            type: 1,
            logo: "img/shu/广西大学行健文理学院.jpg"
        }, {
            school: "广西教育学院",
            link: 'http://www.gxec.net.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广西教育学院.jpg"
        }, {
            school: "广西民族大学",
            link: 'http://www.gxun.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广西民族大学.jpg"
        }, {
            school: "广西民族师范学院",
            link: 'http://www.gxnun.net/',
            key: 'g',
            type: 1,
            logo: "img/shu/广西民族师范学院.jpg"
        }, {
            school: "广西师范大学",
            link: 'http://www.gxnu.edu.cn/default.html',
            key: 'g',
            type: 3,
            logo: "img/shu/广西师范大学.jpg"
        }, {
            school: "广西师范学院",
            link: 'http://www.gxtc.edu.cn/',
            key: 'g',
            type: 3,
            logo: "img/shu/广西师范学院.jpg"
        },
        {
            school: "广西师范学院师园学院",
            link: 'http://www.gxsy.edu.cn/',
            key: 'g',
            type: 3,
            logo: "img/shu/广西师范学院师园学院.jpg"
        }, {
            school: "广西艺术学院",
            link: 'http://www.gxau.edu.cn/',
            key: 'g',
            type: 2,
            logo: "img/shu/广西艺术学院.jpg"
        }, {
            school: "广州大学",
            link: 'http://www.gzhu.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/广州大学.jpg"
        }, {
            school: "广州大学松田学院",
            link: 'http://www.sontan.net/index.do',
            key: 'g',
            type: 1,
            logo: "img/shu/广州大学松田学院.jpg"
        }, {
            school: "广州美术学院",
            link: 'http://www.gzarts.edu.cn/2013/',
            key: 'g',
            type: 2,
            logo: "img/shu/广州美术学院.jpg"
        }, {
            school: "贵阳学院",
            link: 'http://www.gyu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/贵阳学院.jpg"
        }, {
            school: "贵州工程应用技术学院",
            link: 'http://www.gues.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/贵州工程应用技术学院.jpg"
        }, {
            school: "贵州民族大学",
            link: 'http://www.gzmu.edu.cn/',
            key: 'g',
            type: 4,
            logo: "img/shu/贵州民族大学.jpg"
        }, {
            school: "贵州民族大学人文科技学院",
            link: 'http://www.gzmyrw.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/贵州民族大学人文科技学院.jpg"
        }, {
            school: "贵州师范大学",
            link: 'http://www.gznu.edu.cn/',
            key: 'g',
            type: 3,
            logo: "img/shu/贵州师范大学.jpg"
        }, {
            school: "贵州师范大学求是学院",
            link: 'http://qsxy.gznu.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/贵州师范大学求是学院.jpg"
        }, {
            school: "贵州师范学院",
            link: 'http://www.gznc.edu.cn/',
            key: 'g',
            type: 1,
            logo: "img/shu/贵州师范学院.jpg"
        },
        {
            school: "哈尔滨师范大学",
            link: 'http://www.hrbnu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/哈尔滨师范大学.jpg"
        }, {
            school: "哈尔滨学院",
            link: 'http://www.hrbu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/哈尔滨学院.jpg"
        }, {
            school: "海南师范大学",
            link: 'http://www.hainnu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/海南师范大学.jpg"
        }, {
            school: "邯郸学院",
            link: 'http://www.hdc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/邯郸学院.jpg"
        }, {
            school: "韩山师范学院",
            link: 'http://www.hstc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/韩山师范学院.jpg"
        }, {
            school: "汉口学院",
            link: 'http://www.ccbscc.com/',
            key: 'h',
            type: 1,
            logo: "img/shu/汉口学院.jpg"
        }, {
            school: "杭州师范大学",
            link: 'http://www.hznu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/杭州师范大学.jpg"
        }, {
            school: "合肥师范学院",
            link: 'http://www.hebeinu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/合肥师范学院.jpg"
        }, {
            school: "河北北方学院",
            link: 'http://www.hrbnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河北北方学院.jpg"
        }, {
            school: "河北科技大学",
            link: 'http://www.hebust.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河北科技大学.jpg"
        }, {
            school: "河北科技师范学院",
            link: 'http://www.hevttc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河北科技师范学院.jpg"
        }, {
            school: "河北美术学院",
            link: 'http://www.hbafa.com/',
            key: 'h',
            type: 1,
            logo: "img/shu/河北美术学院.jpg"
        }, {
            school: "河北民族师范学院",
            link: 'http://www.hbun.net/',
            key: 'h',
            type: 1,
            logo: "img/shu/河北民族师范学院.jpg"
        }, {
            school: "河北师范大学",
            link: 'http://www.hebtu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/河北师范大学.jpg"
        }, {
            school: "河北师范大学汇华学院",
            link: 'http://www.hebtu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/河北师范大学汇华学院.jpg"
        }, {
            school: "河池学院",
            link: 'http://www.hcnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河池学院.jpg"
        }, {
            school: "河南财经政法大学",
            link: 'http://www.huel.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南财经政法大学.jpg"
        }, {
            school: "河南大学",
            link: 'http://www.henu.edu.cn/',
            key: 'h',
            type: 4,
            logo: "img/shu/河南大学.jpg"
        }, {
            school: "河南大学民生学院",
            link: 'http://minsheng.henu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南大学民生学院.jpg"
        }, {
            school: "河南教育学院",
            link: 'http://www.haie.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南教育学院.jpg"
        }, {
            school: "河南科技大学",
            link: 'http://www.haust.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南科技大学.jpg"
        }, {
            school: "河南科技学院",
            link: 'http://www.hist.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南科技学院.jpg"
        }, {
            school: "河南师范大学",
            link: 'http://www.henannu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南师范大学.jpg"
        }, {
            school: "河南师范大学新联学院",
            link: 'http://www.xlxy.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/河南师范大学新联学院.jpg"
        }, {
            school: "河套学院",
            link: 'http://www.hetaodaxue.com/',
            key: 'h',
            type: 1,
            logo: "img/shu/河套学院.jpg"
        }, {
            school: "河西学院",
            link: 'http://www10.hxu.edu.cn/w/Default.htm',
            key: 'h',
            type: 1,
            logo: "img/shu/河西学院.jpg"
        }, {
            school: "菏泽学院",
            link: 'http://www.hezeu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/菏泽学院.jpg"
        }, {
            school: "贺州学院",
            link: 'http://www.hzu.gx.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/贺州学院.jpg"
        }, {
            school: "黑河学院",
            link: 'http://www.hhhxy.cn/',
            key: 'h',
            type: 4,
            logo: "img/shu/黑河学院.jpg"
        }, {
            school: "黑龙江省教育学院",
            link: 'http://www.hljyxy.org.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/黑龙江省教育学院.jpg"
        }, {
            school: "衡水学院",
            link: 'http://www.hsnc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/衡水学院.jpg"
        }, {
            school: "衡阳师范学院",
            link: 'http://www.hynu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/衡阳师范学院.jpg"
        }, {
            school: "衡阳师范学院南岳学院",
            link: 'http://nyxy.hynu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/衡阳师范学院南岳学院.jpg"
        }, {
            school: "红河学院",
            link: 'http://www.uoh.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/红河学院.jpg"
        }, {
            school: "呼和浩特民族学院",
            link: 'http://www.imnc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/呼和浩特民族学院.jpg"
        }, {
            school: "呼伦贝尔学院",
            link: 'http://www.hlbrc.cn/xyjj/index.htm',
            key: 'h',
            type: 1,
            logo: "img/shu/呼伦贝尔学院.jpg"
        }, {
            school: "湖北大学",
            link: 'http://www.hubu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北大学.jpg"
        }, {
            school: "湖北大学知行学院",
            link: 'http://www.hudazx.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北大学知行学院.jpg"
        }, {
            school: "湖北第二师范学院",
            link: 'http://www.hue.edu.cn/static/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北第二师范学院.jpg"
        }, {
            school: "湖北工程学院",
            link: 'http://www.hbeu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北工程学院.jpg"
        }, {
            school: "湖北工业大学",
            link: 'http://www.hbut.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北工业大学.jpg"
        }, {
            school: "湖北科技学院",
            link: 'http://www.enxnc.com.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北科技学院.jpg"
        }, {
            school: "湖北美术学院",
            link: 'http://www.hifa.edu.cn/',
            key: 'h',
            type: 2,
            logo: "img/shu/湖北美术学院.jpg"
        }, {
            school: "湖北民族学院",
            link: 'http://www.hbmy.edu.cn/templet/default/index.html/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北民族学院.jpg"
        }, {
            school: "湖北民族学院科技学院",
            link: 'http://www.hbmykjxy.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北民族学院科技学院.jpg"
        }, {
            school: "湖北师范学院",
            link: 'http://www.hbnu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/湖北师范学院.jpg"
        }, {
            school: "湖北师范学院文理学院",
            link: 'http://www.wlxy.hbnu.edu.cn/servlet/CollegeServlet?status=toindex',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北师范学院文理学院.jpg"
        }, {
            school: "湖北文理学院",
            link: 'http://www.hbuas.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖北文理学院.jpg"
        }, {
            school: "湖南城市学院",
            link: 'http://www.hncu.net/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南城市学院.jpg"
        }, {
            school: "湖南第一师范学院",
            link: 'http://www.hnfnu.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/湖南第一师范学院.jpg"
        }, {
            school: "湖南工业大学",
            link: 'http://www.hut.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南工业大学.jpg"
        }, {
            school: "湖南科技大学",
            link: 'http://www.hnust.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南科技大学.jpg"
        }, {
            school: "湖南科技大学潇湘学院",
            link: 'http://xxxy.hnust.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南科技大学潇湘学院.jpg"
        }, {
            school: "湖南科技学院",
            link: 'http://www.huse.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南科技学院.jpg"
        }, {
            school: "湖南理工学院",
            link: 'http://www.hnist.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南理工学院.jpg"
        }, {
            school: "湖南农业大学",
            link: 'http://www.hunau.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南农业大学.jpg"
        }, {
            school: "湖南女子学院",
            link: 'http://www.hnnd.com.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南女子学院.jpg"
        }, {
            school: "湖南人文科技学院",
            link: 'http://www.huhst.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/湖南人文科技学院.jpg"
        }, {
            school: "湖南师范大学",
            link: 'http://www.hunnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南师范大学.jpg"
        }, {
            school: "湖南文理学院",
            link: 'http://www.huas.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南文理学院.jpg"
        }, {
            school: "湖南文理学院芙蓉学院",
            link: 'http://fur.huas.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖南文理学院芙蓉学院.jpg"
        }, {
            school: "湖州师范学院",
            link: 'http://www.zjhu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖州师范学院.jpg"
        }, {
            school: "湖州师范学院求真学院",
            link: 'http://qzxy.hutc.zj.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/湖州师范学院求真学院.jpg"
        }, {
            school: "华东师范大学",
            link: 'http://www.ecnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/华东师范大学.jpg"
        }, {
            school: "华南师范大学",
            link: 'http://www.scnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/华南师范大学.jpg"
        }, {
            school: "华侨大学",
            link: 'http://www.hqu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/华侨大学.jpg"
        }, {
            school: "华中师范大学",
            link: 'http://www.ccnu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/华中师范大学.jpg"
        }, {
            school: "怀化学院",
            link: 'http://www.hhtc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/怀化学院.jpg"
        }, {
            school: "淮北师范大学",
            link: 'http://www.hbcnc.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/淮北师范大学.jpg"
        }, {
            school: "淮南师范学院",
            link: 'http://www.hytc.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/淮南师范学院.jpg"
        }, {
            school: "淮阴师范学院",
            link: 'http://www.hytc.edu.cn/',
            key: 'h',
            type: 3,
            logo: "img/shu/淮阴师范学院.jpg"
        }, {
            school: "黄冈师范学院",
            link: 'http://www.hgnc.net/2016/index.jsp',
            key: 'h',
            type: 1,
            logo: "img/shu/黄冈师范学院.jpg"
        }, {
            school: "黄淮学院",
            link: 'http://www.huanghuai.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/黄淮学院.jpg"
        }, {
            school: "黄山学院",
            link: 'http://www.hsu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/黄山学院.jpg"
        }, {
            school: "惠州学院",
            link: 'http://www.hzu.edu.cn/',
            key: 'h',
            type: 1,
            logo: "img/shu/惠州学院.jpg"
        }, {
            "school": "吉林动画学院",
            "link": "http://www.jlai.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉林动画学院.jpg"
        }, {
            "school": "吉林工程技术师范学院",
            "link": "http://www.jltiet.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉林工程技术师范学院.jpg"
        }, {
            "school": "吉林建筑大学",
            "link": "http://www.jliae.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉林建筑大学.jpg"
        }, {
            "school": "吉林师范大学",
            "link": "http://www.jlnu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉林师范大学.jpg"
        }, {
            "school": "吉林师范大学博达学院",
            "link": "http://www.bdxy.com.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉林师范大学博达学院.jpg"
        }, {
            "school": "吉林艺术学院",
            "link": "http://www.jlart.edu.cn/",
            "key": "j",
            "type": 2,
            "logo": "img/shu/吉林艺术学院.jpg"
        }, {
            "school": "吉首大学",
            "link": "http://www.jsu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/吉首大学.jpg"
        }, {
            "school": "集美大学",
            "link": "http://www.jmu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/集美大学.jpg"
        }, {
            "school": "集美大学诚毅学院",
            "link": "http://chengyi.jmu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/集美大学诚毅学院.jpg"
        }, {
            "school": "集宁师范学院",
            "link": "http://www.jntc.nm.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/集宁师范学院.jpg"
        }, {
            "school": "济南大学",
            "link": "http://www.ujn.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/济南大学.jpg"
        }, {
            "school": "济宁学院",
            "link": "http://www.jnxy.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/济宁学院.jpg"
        }, {
            "school": "暨南大学",
            "link": "http://www.jnu.edu.cn/",
            "key": "j",
            "type": 4,
            "logo": "img/shu/暨南大学.jpg"
        }, {
            "school": "佳木斯大学",
            "link": "http://www.jmsu.org/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/佳木斯大学.jpg"
        }, {
            "school": "嘉兴学院",
            "link": "http://www.zjxu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/嘉兴学院.jpg"
        }, {
            "school": "嘉应学院",
            "link": "http://www.jyu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/嘉应学院.jpg"
        }, {
            "school": "江汉大学",
            "link": "http://www.jhun.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江汉大学.jpg"
        }, {
            "school": "江南大学",
            "link": "http://www.jiangnan.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江南大学.jpg"
        }, {
            "school": "江苏大学",
            "link": "http://www.ujs.edu.cn/site1/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江苏大学.jpg"
        }, {
            "school": "江苏第二师范学院",
            "link": "http://www.jssnu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江苏第二师范学院.jpg"
        }, {
            "school": "江苏理工学院",
            "link": "http://www.jstu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江苏理工学院.jpg"
        }, {
            "school": "江苏师范大学",
            "link": "http://www.xznu.edu.cn/",
            "key": "j",
            "type": 3,
            "logo": "img/shu/江苏师范大学.jpg"
        }, {
            "school": "江西服装学院",
            "link": "http://www.jift.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江西服装学院.jpg"
        }, {
            "school": "江西科技师范大学",
            "link": "http://www.jxstnu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江西科技师范大学.jpg"
        }, {
            "school": "江西美术学院",
            "link": "http://www.jca1992.com/cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江西美术学院.jpg"
        }, {
            "school": "江西师范大学",
            "link": "http://www.jxnu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江西师范大学.jpg"
        }, {
            "school": "江西师范大学科学技术学院",
            "link": "http://www.gpu2001.com/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/江西师范大学科学技术学院.jpg"
        }, {
            "school": "晋中学院",
            "link": "http://new.jzxy.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/晋中学院.jpg"
        }, {
            "school": "井冈山大学",
            "link": "http://www.jgsu.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/井冈山大学.jpg"
        }, {
            "school": "景德镇陶瓷大学",
            "link": "http://www.jci.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/景德镇陶瓷大学.jpg"
        }, {
            "school": "九江学院",
            "link": "http://www.jju.edu.cn/",
            "key": "j",
            "type": 1,
            "logo": "img/shu/九江学院.jpg"
        }, {
            "school": "喀什大学",
            "link": "http://www.ksu.edu.cn/",
            "key": "k",
            "type": 1,
            "logo": "img/shu/喀什大学.jpg"
        }, {
            "school": "凯里学院",
            "link": "http://www.kluniv.edu.cn/",
            "key": "k",
            "type": 1,
            "logo": "img/shu/凯里学院.jpg"
        }, {
            "school": "昆明学院",
            "link": "http://www.kmu.edu.cn/",
            "key": "k",
            "type": 1,
            "logo": "img/shu/昆明学院.jpg"
        }, {
            "school": "廊坊师范学院",
            "link": "http://www.lfsfxy.edu.cn/",
            "key": "l",
            "type": 3,
            "logo": "img/shu/廊坊师范学院.jpg"
        }, {
            "school": "乐山师范学院",
            "link": "http://www.lstc.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/乐山师范学院.jpg"
        }, {
            "school": "丽水学院",
            "link": "http://www.lsu.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/丽水学院.jpg"
        }, {
            "school": "辽宁大学",
            "link": "http://www.lnu.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/辽宁大学.jpg"
        }, {
            "school": "辽宁科技学院",
            "link": "http://www.lnist.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/辽宁科技学院.jpg"
        }, {
            "school": "辽宁理工学院",
            "link": "http://www.lise.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/辽宁理工学院.jpg"
        }, {
            "school": "辽宁师范大学",
            "link": "http://www.lnnu.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/辽宁师范大学.jpg"
        }, {
            "school": "聊城大学",
            "link": "http://www.lcu.edu.cn/",
            "key": "l",
            "type": 4,
            "logo": "img/shu/聊城大学.jpg"
        }, {
            "school": "临沂大学",
            "link": "http://www.lyu.edu.cn/chpage/default.htm",
            "key": "l",
            "type": 4,
            "logo": "img/shu/临沂大学.jpg"
        }, {
            "school": "岭南师范学院",
            "link": "http://www.lingnan.edu.cn/",
            "key": "l",
            "type": 3,
            "logo": "img/shu/岭南师范学院.jpg"
        }, {
            "school": "六盘水师范学院",
            "link": "http://www.lpssy.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/六盘水师范学院.jpg"
        }, {
            "school": "龙岩学院",
            "link": "http://www.lyun.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/龙岩学院.jpg"
        }, {
            "school": "陇东学院",
            "link": "http://www.ldxy.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/陇东学院.jpg"
        }, {
            "school": "鲁东大学",
            "link": "http://www.ldu.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/鲁东大学.jpg"
        }, {
            "school": "鲁迅美术学院",
            "link": "http://www.lumei.edu.cn/index.htm",
            "key": "l",
            "type": 2,
            "logo": "img/shu/鲁迅美术学院.jpg"
        }, {
            "school": "洛阳理工学院",
            "link": "http://www.lit.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/洛阳理工学院.jpg"
        }, {
            "school": "洛阳师范学院",
            "link": "http://www.lynu.cn/",
            "key": "l",
            "type": 3,
            "logo": "img/shu/洛阳师范学院.jpg"
        }, {
            "school": "吕梁学院",
            "link": "http://www.llhc.edu.cn/",
            "key": "l",
            "type": 1,
            "logo": "img/shu/吕梁学院.jpg"
        }, {
            "school": "绵阳师范学院",
            "link": "http://www.mnu.cn/",
            "key": "m",
            "type": 1,
            "logo": "img/shu/绵阳师范学院.jpg"
        }, {
            "school": "闽南师范大学",
            "link": "http://www.mnnu.edu.cn/",
            "key": "m",
            "type": 1,
            "logo": "img/shu/闽南师范大学.jpg"
        }, {
            "school": "牡丹江师范学院",
            "link": "http://www.mdjnu.cn/",
            "key": "m",
            "type": 1,
            "logo": "img/shu/牡丹江师范学院.jpg"
        }, {
            "school": "南昌师范学院",
            "link": "http://www.jxie.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南昌师范学院.jpg"
        }, {
            "school": "南京财经大学",
            "link": "http://www.njue.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南京财经大学.jpg"
        }, {
            "school": "南京大学",
            "link": "https://www.nju.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南京大学.jpg"
        }, {
            "school": "南京航空航天大学",
            "link": "http://www.nuaa.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南京航空航天大学.jpg"
        }, {
            "school": "南京师范大学",
            "link": "http://www.njnu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南京师范大学.jpg"
        }, {
            "school": "南京师范大学泰州学院",
            "link": "http://www.nnutc.edu.cn/",
            "key": "n",
            "type": 4,
            "logo": "img/shu/南京师范大学泰州学院.jpg"
        }, {
            "school": "南京师范大学中北学院",
            "link": "http://www.nnuzc.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南京师范大学中北学院.jpg"
        }, {
            "school": "南京艺术学院",
            "link": "http://www.njarti.edu.cn/",
            "key": "n",
            "type": 2,
            "logo": "img/shu/南京艺术学院.jpg"
        }, {
            "school": "南通大学",
            "link": "http://www.ntu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南通大学.jpg"
        }, {
            "school": "南阳师范学院",
            "link": "http://www.nynu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/南阳师范学院.jpg"
        }, {
            "school": "内江师范学院",
            "link": "http://www.njtc.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内江师范学院.jpg"
        }, {
            "school": "内蒙古大学",
            "link": "http://www.imu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内蒙古大学.jpg"
        }, {
            "school": "内蒙古科技大学",
            "link": "http://www.imust.cn/",
            "key": "n",
            "type": 4,
            "logo": "img/shu/内蒙古科技大学.jpg"
        }, {
            "school": "内蒙古科技大学包头师范学院",
            "link": "http://www.bttc.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内蒙古科技大学包头师范学院.jpg"
        }, {
            "school": "内蒙古民族大学",
            "link": "http://www.imun.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内蒙古民族大学.jpg"
        }, {
            "school": "内蒙古师范大学",
            "link": "http://www.imnu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内蒙古师范大学.jpg"
        }, {
            "school": "内蒙古师范大学鸿德学院",
            "link": "http://www.honder.com/list.php?fid=83",
            "key": "n",
            "type": 1,
            "logo": "img/shu/内蒙古师范大学鸿德学院.jpg"
        }, {
            "school": "宁波大学",
            "link": "http://www.nbu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/宁波大学.jpg"
        }, {
            "school": "宁波教育学院",
            "link": "http://www.nbei.net/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/宁波教育学院.jpg"
        }, {
            "school": "宁夏大学",
            "link": "http://www.nxu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/宁夏大学.jpg"
        }, {
            "school": "宁夏大学新华学院",
            "link": "http://xinhua.nxu.edu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/宁夏大学新华学院.jpg"
        }, {
            "school": "宁夏师范学院",
            "link": "http://www.nxtu.cn/",
            "key": "n",
            "type": 1,
            "logo": "img/shu/宁夏师范学院.jpg"
        }, {
            "school": "平顶山学院",
            "link": "http://www.pdsu.edu.cn/",
            "key": "p",
            "type": 1,
            "logo": "img/shu/平顶山学院.jpg"
        }, {
            "school": "莆田学院",
            "link": "http://www.ptu.edu.cn/",
            "key": "p",
            "type": 1,
            "logo": "img/shu/莆田学院.jpg"
        }, {
            "school": "普洱学院",
            "link": "http://www.peuni.cn/",
            "key": "p",
            "type": 1,
            "logo": "img/shu/普洱学院.jpg"
        }, {
            "school": "齐鲁理工学院",
            "link": "http://www.xtxy.cn/",
            "key": "q",
            "type": 4,
            "logo": "img/shu/齐鲁理工学院.jpg"
        }, {
            "school": "齐鲁师范学院",
            "link": "http://www.qlnu.edu.cn/",
            "key": "q",
            "type": 3,
            "logo": "img/shu/齐鲁师范学院.jpg"
        }, {
            "school": "齐齐哈尔大学",
            "link": "http://www.qqhru.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/齐齐哈尔大学.jpg"
        }, {
            "school": "黔南民族师范学院",
            "link": "http://www.sgmtu.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/黔南民族师范学院.jpg"
        }, {
            "school": "钦州学院",
            "link": "http://www.qzhu.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/钦州学院.jpg"
        }, {
            "school": "青岛职业技术学院",
            "link": "http://www.qtc.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/青岛职业技术学院.jpg"
        }, {
            "school": "青海师范大学",
            "link": "http://www.qhnu.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/青海师范大学.jpg"
        }, {
            "school": "清华大学美术学院",
            "link": "http://www.tsinghua.edu.cn/publish/newthu/index.html",
            "key": "q",
            "type": 1,
            "logo": "img/shu/清华大学美术学院.jpg"
        }, {
            "school": "曲阜师范大学",
            "link": "http://www.qfnu.edu.cn/",
            "key": "q",
            "type": 3,
            "logo": "img/shu/曲阜师范大学.jpg"
        }, {
            "school": "曲靖师范学院",
            "link": "http://www.qjnu.edu.cn/",
            "key": "q",
            "type": 3,
            "logo": "img/shu/曲靖师范学院.jpg"
        }, {
            "school": "泉州师范学院",
            "link": "http://www.qztc.edu.cn/",
            "key": "q",
            "type": 1,
            "logo": "img/shu/泉州师范学院.jpg"
        }, {
            "school": "三明学院",
            "link": "http://www.fjsmu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/三明学院.jpg"
        }, {
            "school": "三峡大学",
            "link": "http://www.ctgu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/三峡大学.jpg"
        }, {
            "school": "厦门大学",
            "link": "http://www.xmu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/厦门大学.jpg"
        }, {
            "school": "山东财经大学",
            "link": "http://www.sdufe.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东财经大学.jpg"
        }, {
            "school": "山东财政学院",
            "link": "http://pub.sdfi.edu.cn/info/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东财政学院.jpg"
        }, {
            "school": "山东大学",
            "link": "http://www.sdu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东大学.jpg"
        }, {
            "school": "山东大学威海分校",
            "link": "https://www.wh.sdu.edu.cn/index.do",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东大学威海分校.jpg"
        }, {
            "school": "山东工艺美术学院",
            "link": "http://www.sdada.edu.cn/",
            "key": "s",
            "type": 2,
            "logo": "img/shu/山东工艺美术学院.jpg"
        }, {
            "school": "山东建筑大学",
            "link": "http://www.sdjzu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东建筑大学.jpg"
        }, {
            "school": "山东经济学院",
            "link": "http://www.sdufe.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东经济学院.jpg"
        }, {
            "school": "山东理工大学",
            "link": "http://www.sdut.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东理工大学.jpg"
        }, {
            "school": "山东师范大学",
            "link": "http://www.sdnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东师范大学.jpg"
        }, {
            "school": "山东师范大学历山学院",
            "link": "http://www.lsxy-edu.com/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山东师范大学历山学院.jpg"
        }, {
            "school": "山东艺术学院",
            "link": "http://www.sdca.edu.cn/",
            "key": "s",
            "type": 2,
            "logo": "img/shu/山东艺术学院.jpg"
        }, {
            "school": "山西财经大学华商学院",
            "link": "http://www.schsxy.com/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西财经大学华商学院.jpg"
        }, {
            "school": "山西大同大学",
            "link": "http://www.sxdtdx.edu.cn/",
            "key": "s",
            "type": 4,
            "logo": "img/shu/山西大同大学.jpg"
        }, {
            "school": "山西大学",
            "link": "http://www.sxu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西大学.jpg"
        }, {
            "school": "山西大学商务学院",
            "link": "http://www.sdsy.sxu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西大学商务学院.jpg"
        }, {
            "school": "山西师范大学",
            "link": "http://www.sxnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西师范大学.jpg"
        }, {
            "school": "山西师范大学现代文理学院",
            "link": "http://www.sxnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西师范大学现代文理学院.jpg"
        }, {
            "school": "山西中医学院",
            "link": "http://www.sxtcm.com/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/山西中医学院.jpg"
        }, {
            "school": "陕西理工学院",
            "link": "http://www.snut.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/陕西理工学院.jpg"
        }, {
            "school": "陕西师范大学",
            "link": "http://www.snnu.edu.cn/default.php",
            "key": "s",
            "type": 1,
            "logo": "img/shu/陕西师范大学.jpg"
        }, {
            "school": "陕西学前师范学院",
            "link": "http://www.snie.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/陕西学前师范学院.jpg"
        }, {
            "school": "汕头大学",
            "link": "http://www.stu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/汕头大学.jpg"
        }, {
            "school": "商洛学院",
            "link": "http://www.slxy.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/商洛学院.jpg"
        }, {
            "school": "商丘师范学院",
            "link": "http://www.sqnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/商丘师范学院.jpg"
        }, {
            "school": "商丘学院",
            "link": "http://www.squ.net.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/商丘学院.jpg"
        }, {
            "school": "上海大学",
            "link": "http://www.shu.edu.cn/IndexPage.html",
            "key": "s",
            "type": 1,
            "logo": "img/shu/上海大学.jpg"
        }, {
            "school": "上海师范大学",
            "link": "http://www.shnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/上海师范大学.jpg"
        }, {
            "school": "上海戏剧学院",
            "link": "http://www.sta.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/上海戏剧学院.jpg"
        }, {
            "school": "上饶师范学院",
            "link": "http://www.sru.jx.cn/",
            "key": "s",
            "type": 3,
            "logo": "img/shu/上饶师范学院.jpg"
        }, {
            "school": "韶关学院",
            "link": "http://www.sgu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/韶关学院.jpg"
        }, {
            "school": "邵阳学院",
            "link": "http://www.hnsyu.net/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/邵阳学院.jpg"
        }, {
            "school": "绍兴文理学院",
            "link": "http://www.usx.edu.cn/",
            "key": "s",
            "type": 4,
            "logo": "img/shu/绍兴文理学院.jpg"
        }, {
            "school": "深圳大学",
            "link": "http://www.szu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/深圳大学.jpg"
        }, {
            "school": "沈阳大学",
            "link": "http://www.syu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/沈阳大学.jpg"
        }, {
            "school": "沈阳工业大学",
            "link": "http://www.sut.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/沈阳工业大学.jpg"
        }, {
            "school": "沈阳理工大学",
            "link": "http://www.sylu.edu.cn/sylusite/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/沈阳理工大学.jpg"
        }, {
            "school": "沈阳师范大学",
            "link": "http://www.synu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/沈阳师范大学.jpg"
        }, {
            "school": "石河子大学",
            "link": "http://www.shzu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/石河子大学.jpg"
        }, {
            "school": "石家庄学院",
            "link": "http://www.sjzc.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/石家庄学院.jpg"
        }, {
            "school": "首都师范大学",
            "link": "http://www.cnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/首都师范大学.jpg"
        }, {
            "school": "首都师范大学科德学院",
            "link": "http://www.kdcnu.com/",
            "key": "s",
            "type": 3,
            "logo": "img/shu/首都师范大学科德学院.jpg"
        }, {
            "school": "四川传媒学院",
            "link": "http://www.scmc.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川传媒学院.jpg"
        }, {
            "school": "四川大学",
            "link": "http://www.scu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川大学.jpg"
        }, {
            "school": "四川理工学院",
            "link": "http://www.suse.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川理工学院.jpg"
        }, {
            "school": "四川美术学院",
            "link": "http://www.scfai.edu.cn/",
            "key": "s",
            "type": 2,
            "logo": "img/shu/四川美术学院.jpg"
        }, {
            "school": "四川民族学院",
            "link": "http://www.scun.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川民族学院.jpg"
        }, {
            "school": "四川师范大学",
            "link": "http://www.sicnu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川师范大学.jpg"
        }, {
            "school": "四川外国语大学重庆南方翻译学院",
            "link": "http://www.tcsisu.com/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川外国语大学重庆南方翻译学院.jpg"
        }, {
            "school": "四川文理学院",
            "link": "http://www.sasu.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川文理学院.jpg"
        }, {
            "school": "四川音乐学院",
            "link": "http://www.sccm.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/四川音乐学院.jpg"
        }, {
            "school": "苏州大学",
            "link": "http://www.suda.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/苏州大学.jpg"
        }, {
            "school": "苏州科技大学",
            "link": "http://www.usts.edu.cn/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/苏州科技大学.jpg"
        }, {
            "school": "绥化学院",
            "link": "http://wwww.shxy.net/",
            "key": "s",
            "type": 1,
            "logo": "img/shu/绥化学院.jpg"
        },
        {
            "school": "台州学院",
            "link": "http://www.tzc.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/台州学院.jpg"
        }, {
            "school": "太原工业学院",
            "link": "http://www.tit.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/太原工业学院.jpg"
        }, {
            "school": "太原科技大学",
            "link": "http://www.tyust.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/太原科技大学.jpg"
        }, {
            "school": "太原理工大学",
            "link": "http://ie.tyut.edu.cn/cn/index.html",
            "key": "t",
            "type": 1,
            "logo": "img/shu/太原理工大学.jpg"
        }, {
            "school": "太原师范学院",
            "link": "http://www.tynu.edu.cn/",
            "key": "t",
            "type": 3,
            "logo": "img/shu/太原师范学院.jpg"
        }, {
            "school": "泰山学院",
            "link": "http://www.tsu.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/泰山学院.jpg"
        }, {
            "school": "唐山师范学院",
            "link": "http://www.tstc.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/唐山师范学院.jpg"
        }, {
            "school": "天津财经大学",
            "link": "http://www.tjufe.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/天津财经大学.jpg"
        }, {
            "school": "天津大学",
            "link": "http://www.tju.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/天津大学.jpg"
        }, {
            "school": "天津理工大学",
            "link": "http://www.tjut.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/天津理工大学.jpg"
        }, {
            "school": "天津美术学院",
            "link": "http://www.tjarts.edu.cn/",
            "key": "t",
            "type": 2,
            "logo": "img/shu/天津美术学院.jpg"
        }, {
            "school": "天津师范大学",
            "link": "http://www.tjnu.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/天津师范大学.jpg"
        }, {
            "school": "天水师范学院",
            "link": "http://www.tsnu.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/天水师范学院.jpg"
        }, {
            "school": "通化师范学院",
            "link": "http://www.thnu.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/通化师范学院.jpg"
        }, {
            "school": "铜陵学院",
            "link": "http://www.tlu.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/铜陵学院.jpg"
        }, {
            "school": "铜仁学院",
            "link": "http://www.gztrc.edu.cn/",
            "key": "t",
            "type": 1,
            "logo": "img/shu/铜仁学院.jpg"
        }, {
            "school": "皖西学院",
            "link": "http://www.wxc.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/皖西学院.jpg"
        }, {
            "school": "潍坊学院",
            "link": "http://www.wfu.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/潍坊学院.jpg"
        }, {
            "school": "渭南师范学院",
            "link": "http://www.wntc.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/渭南师范学院.jpg"
        }, {
            "school": "温州大学",
            "link": "http://www.wzu.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/温州大学.jpg"
        }, {
            "school": "温州大学瓯江学院",
            "link": "http://www.ojc.zj.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/温州大学瓯江学院.jpg"
        }, {
            "school": "文山学院",
            "link": "http://www.wsu.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/文山学院.jpg"
        }, {
            "school": "武汉大学",
            "link": "http://www.whu.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/武汉大学.jpg"
        }, {
            "school": "武汉工程大学",
            "link": "http://www.wit.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/武汉工程大学.jpg"
        }, {
            "school": "武汉学院",
            "link": "http://www.whxy.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/武汉学院.jpg"
        }, {
            "school": "武夷学院",
            "link": "http://www.wuyiu.edu.cn/",
            "key": "w",
            "type": 1,
            "logo": "img/shu/武夷学院.jpg"
        }, {
            "school": "西安工程大学",
            "link": "http://www.xpu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西安工程大学.jpg"
        }, {
            "school": "西安工业大学",
            "link": "http://www.xatu.cn/",
            "key": "x",
            "type": 4,
            "logo": "img/shu/西安工业大学.jpg"
        }, {
            "school": "西安美术学院",
            "link": "http://www.xafa.edu.cn/",
            "key": "x",
            "type": 2,
            "logo": "img/shu/西安美术学院.jpg"
        }, {
            "school": "西安文理学院",
            "link": "http://www.xawl.org/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西安文理学院.jpg"
        }, {
            "school": "西北大学",
            "link": "http://www.nwu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西北大学.jpg"
        }, {
            "school": "西北师范大学",
            "link": "http://www.nwnu.edu.cn/",
            "key": "x",
            "type": 3,
            "logo": "img/shu/西北师范大学.jpg"
        }, {
            "school": "西北师范大学知行学院",
            "link": "http://zxxy.nwnu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西北师范大学知行学院.jpg"
        }, {
            "school": "西藏大学",
            "link": "http://www.utibet.edu.cn/index.html;jsessionid=6454E967D47602284C1DD80CEA77AF8E",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西藏大学.jpg"
        }, {
            "school": "西昌学院",
            "link": "http://www.xcc.sc.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西昌学院.jpg"
        }, {
            "school": "西华大学",
            "link": "http://www.xhu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西华大学.jpg"
        }, {
            "school": "西华师范大学",
            "link": "http://www.cwnu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西华师范大学.jpg"
        }, {
            "school": "西京学院",
            "link": "http://www.xijing.com.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西京学院.jpg"
        }, {
            "school": "西南大学",
            "link": "http://www.swu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西南大学.jpg"
        }, {
            "school": "西南民族大学",
            "link": "http://www.swun.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/西南民族大学.jpg"
        }, {
            "school": "咸阳师范学院",
            "link": "http://www.xysfxy.cn/",
            "key": "x",
            "type": 3,
            "logo": "img/shu/咸阳师范学院.jpg"
        }, {
            "school": "湘南学院",
            "link": "http://www.xnu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/湘南学院.jpg"
        }, {
            "school": "湘潭大学",
            "link": "http://www.xtu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/湘潭大学.jpg"
        }, {
            "school": "忻州师范学院",
            "link": "http://www.xztc.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/忻州师范学院.jpg"
        }, {
            "school": "新疆教育学院",
            "link": "http://www.xjei.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/新疆教育学院.jpg"
        }, {
            "school": "新疆师范大学",
            "link": "http://www.xjei.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/新疆师范大学.jpg"
        }, {
            "school": "新疆艺术学院",
            "link": "http://www.xjart.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/新疆艺术学院.jpg"
        }, {
            "school": "新乡学院",
            "link": "http://www.xxu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/新乡学院.jpg"
        }, {
            "school": "新乡医学院三全学院",
            "link": "http://www.sqmc.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/新乡医学院三全学院.jpg"
        }, {
            "school": "信阳师范学院",
            "link": "http://www.xytc.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/信阳师范学院.jpg"
        }, {
            "school": "信阳学院",
            "link": "http://www.hrxy.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/信阳学院.jpg"
        }, {
            "school": "邢台学院",
            "link": "http://www.xttc.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/邢台学院.jpg"
        }, {
            "school": "兴义民族师范学院",
            "link": "http://www.xynun.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/兴义民族师范学院.jpg"
        }, {
            "school": "宿州学院",
            "link": "http://www.ahszu.edu.cn/",
            "key": "x",
            "type": 1,
            "logo": "img/shu/宿州学院.jpg"
        }, {
            "school": "许昌学院",
            "link": "http://www.xcu.edu.cn/",
            "key": "x",
            "type": 4,
            "logo": "img/shu/许昌学院.jpg"
        }, {
            "school": "延安大学",
            "link": "http://www.yau.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/延安大学.jpg"
        }, {
            "school": "延安大学西安创新学院",
            "link": "http://www.xacxxy.com/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/延安大学西安创新学院.jpg"
        }, {
            "school": "延边大学",
            "link": "http://www.ybu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/延边大学.jpg"
        }, {
            "school": "盐城师范学院",
            "link": "http://www.yctc.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/盐城师范学院.jpg"
        }, {
            "school": "扬州大学",
            "link": "http://www.yzu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/扬州大学.jpg"
        }, {
            "school": "阳光学院",
            "link": "http://ygxy.fzu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/阳光学院.jpg"
        }, {
            "school": "伊犁师范学院",
            "link": "http://www.ylsy.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/伊犁师范学院.jpg"
        }, {
            "school": "宜宾学院",
            "link": "http://www.yibinu.cn/web/index.aspx",
            "key": "y",
            "type": 1,
            "logo": "img/shu/宜宾学院.jpg"
        }, {
            "school": "宜春学院",
            "link": "http://www.ycu.jx.cn/",
            "key": "y",
            "type": 4,
            "logo": "img/shu/宜春学院.jpg"
        }, {
            "school": "榆林学院",
            "link": "http://www.yulinu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/榆林学院.jpg"
        }, {
            "school": "玉林师范学院",
            "link": "http://www.ylu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/玉林师范学院.jpg"
        }, {
            "school": "玉溪师范学院",
            "link": "http://www.yxnu.net/",
            "key": "y",
            "type": 3,
            "logo": "img/shu/玉溪师范学院.jpg"
        }, {
            "school": "云南大学",
            "link": "http://www.ynu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/云南大学.jpg"
        }, {
            "school": "云南民族大学",
            "link": "http://www.ynni.edu.cn/web/11403/home;jsessionid=9D00AF6A1FCE9585897BE076BCB7F0F5",
            "key": "y",
            "type": 1,
            "logo": "img/shu/云南民族大学.jpg"
        }, {
            "school": "云南师范大学",
            "link": "http://www.ynnu.edu.cn/",
            "key": "y",
            "type": 3,
            "logo": "img/shu/云南师范大学.jpg"
        }, {
            "school": "云南师范大学商学院",
            "link": "http://www.ynnubs.com/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/云南师范大学商学院.jpg"
        }, {
            "school": "云南艺术学院",
            "link": "http://www.ynart.edu.cn/",
            "key": "y",
            "type": 2,
            "logo": "img/shu/云南艺术学院.jpg"
        }, {
            "school": "云南艺术学院文华学院",
            "link": "http://whxy.ynart.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/云南艺术学院文华学院.jpg"
        }, {
            "school": "运城学院",
            "link": "http://www.ycu.edu.cn/",
            "key": "y",
            "type": 1,
            "logo": "img/shu/运城学院.jpg"
        }, {
            "school": "枣庄学院",
            "link": "http://www.uzz.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/枣庄学院.jpg"
        }, {
            "school": "肇庆学院",
            "link": "http://www.zqu.edu.cn/",
            "key": "z",
            "type": 4,
            "logo": "img/shu/肇庆学院.jpg"
        }, {
            "school": "浙江财经大学",
            "link": "http://www.zufe.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江财经大学.jpg"
        }, {
            "school": "浙江大学",
            "link": "http://www.zju.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江大学.jpg"
        }, {
            "school": "浙江工商大学",
            "link": "http://www.hzic.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江工商大学.jpg"
        }, {
            "school": "浙江理工大学",
            "link": "http://www.zstu.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江理工大学.jpg"
        }, {
            "school": "浙江师范大学",
            "link": "http://www.zjnu.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江师范大学.jpg"
        }, {
            "school": "浙江外国语学院",
            "link": "http://www.zisu.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/浙江外国语学院.jpg"
        }, {
            "school": "郑州轻工业学院",
            "link": "http://www.zzuli.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/郑州轻工业学院.jpg"
        }, {
            "school": "郑州师范学院",
            "link": "http://www.zztc.com.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/郑州师范学院.jpg"
        }, {
            "school": "中北大学",
            "link": "http://www.nuc.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中北大学.jpg"
        }, {
            "school": "中北大学信息商务学院",
            "link": "http://www.ibcnuc.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中北大学信息商务学院.jpg"
        }, {
            "school": "中国传媒大学",
            "link": "http://www.cuc.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中国传媒大学.jpg"
        }, {
            "school": "中国传媒大学南广学院",
            "link": "http://www.cucn.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中国传媒大学南广学院.jpg"
        }, {
            "school": "中国美术学院",
            "link": "http://www.caa.edu.cn/index.html",
            "key": "z",
            "type": 2,
            "logo": "img/shu/中国美术学院.jpg"
        }, {
            "school": "中国人民大学",
            "link": "http://guoji.ruc.edu.cn/html/bkzn424.html",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中国人民大学.jpg"
        }, {
            "school": "中南民族大学",
            "link": "http://www.scuec.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中南民族大学.jpg"
        }, {
            "school": "中央美术学院",
            "link": "http://www.cafa.edu.cn/",
            "key": "z",
            "type": 2,
            "logo": "img/shu/中央美术学院.jpg"
        }, {
            "school": "中央民族大学",
            "link": "http://www.muc.edu.cn/index.html",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中央民族大学.jpg"
        }, {
            "school": "中央戏剧学院",
            "link": "http://www.chntheatre.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/中央戏剧学院.jpg"
        }, {
            "school": "周口师范学院",
            "link": "http://www.zknu.edu.cn/",
            "key": "z",
            "type": 1,
            "logo": "img/shu/周口师范学院.jpg"
        }, {
            "school": "遵义师范学院",
            "link": "http://www.zync.edu.cn/index.html",
            "key": "z",
            "type": 1,
            "logo": "img/shu/遵义师范学院.jpg"
        }
    ]
    var zhuandata = [];
    var zongdata = [];
    var shidata = [];
    for (var i = 0; i < yidatas.length; i++) {
        if (yidatas[i].type == 2) {
            zhuandata.push(yidatas[i]);
        }
        if (yidatas[i].type == 4) {
            zongdata.push(yidatas[i]);
        }
        if (yidatas[i].type == 3) {
            shidata.push(yidatas[i]);
        }
    }
    var shidataadd = [{
        school: "云南楚雄师范学院",
        link: 'http://www.cxtc.edu.cn/',
        key: 'y',
        type: 3,
        logo: "img/shu/云南楚雄师范学院.jpg"
    }]
    var zongdataadd = [{
        school: "郑州大学",
        link: 'http://www.zzu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/郑州大学.jpg"
    }, {
        school: "河北大学",
        link: 'http://www.hbu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/河北大学.jpg"
    }, {
        school: "安徽宿州学院",
        link: 'http://www.ahszu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/安徽宿州学院.jpg"
    }, {
        school: "内蒙古呼伦贝尔学院",
        link: 'http://www.hlbrc.cn/xyjj/index.htm',
        key: 'y',
        type: 4,
        logo: "img/shu/内蒙古呼伦贝尔学院.jpg"
    }, {
        school: "北京语言大学",
        link: 'http://www.blcu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/北京语言大学.jpg"
    }, {
        school: "云南昭通学院",
        link: 'http://www.ztu.edu.cn/index',
        key: 'y',
        type: 4,
        logo: "img/shu/云南昭通学院.jpg"
    }, {
        school: "北京城市学院",
        link: 'http://www.bcu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/北京城市学院.jpg"
    }, {
        school: "中央财经大学",
        link: 'http://www.cufe.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/中央财经大学.jpg"
    }, {
        school: "西安交通大学",
        link: 'http://www.xjtu.edu.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/西安交通大学.jpg"
    }, {
        school: "西安交通大学城市学院",
        link: 'http://www.xjtucc.cn/',
        key: 'y',
        type: 4,
        logo: "img/shu/西安交通大学城市学院.jpg"
    }]
    shidata = shidata.concat(shidataadd);
    zongdata = zongdata.concat(zongdataadd);
    var clicknum = 0;
    Index = {
        init: function (cfg) {
            var isInit = false;
            var thisCfg = $.extend(defaultCfg, cfg);
            Activity.init(thisCfg);
        },
        initEvent: function () {
            $(document).on('click', '.change-btn', function (event) {
                var self = $(this);
                $('.change-btn').removeClass('active');
                self.addClass('active');
                $(".school-classify").addClass('none');
                var indexs = self.index();
                $(".school-classify").eq(indexs).removeClass('none');
                if(indexs == 1){
                    
                    if(clicknum == 0){
                        $('.vmcarousel-centered-infitine').vmcarousel({
                            centered: true,
                            start_item: 1,
                            autoplay: 2000,
                            infinite: true
                        });
                        clicknum += 1;
                    }
                }
            });
            $(document).on('click', '.graduate-list li', function (event) {
                var self = $(this);
                $('.graduate-list li').removeClass('active');
                self.addClass('active');
                $(".J_graduate").addClass('none');
                var indexs = self.index();
                $(".J_graduate").eq(indexs).removeClass('none');
            });
            $(document).on('click', '.school-list li', function (event) {
                var self = $(this);
                $('.school-list li').removeClass('active');
                self.addClass('active');
                $(".J_school").addClass('none');
                var indexs = self.index();
                $(".J_school").eq(indexs).removeClass('none');
            });
            $(document).on('click', '.zimu span', function (event) {
                var self = $(this);
                $(".zimu span").removeClass('active');
                $(".library-empty").addClass("none");
                self.addClass('active');
                var keys = self.attr('data-key');
                $("#otherlists li").removeClass('active');
                $("#otherlists li img.current").removeClass('current');
                $("#otherlists li").each(function (index, value) {
                    if ($(this).attr("data-key") == keys) {
                        $(this).addClass('active');
                        $(this).find('img').addClass('current');
                    }
                })
            });
            $(document).on('click', '.viewids', function () {
                var num = $(this).attr("data-num");
                if (num == 04) {
                    return;
                }
                layer.open({
                    type: 1,
                    shade: 0.8,
                    fixed: true,
                    anim: 5,
                    resize: false,
                    shadeClose: true,
                    area: ['90%', '19rem'],
                    title: false, //不显示标题
                    content: $('.view-video' + num), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                    cancel: function () {
                        // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
                    }
                });
            })
            $(document).on("keyup", ".searchinput-input", function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(".library-empty").addClass("none");
                var node = $(this);
                setTimeout(function () {
                    var value = node.val();
                    console.log(value);
                    // 如果此时的input值为空则退出，主要为了防止删除至空出现所有的值
                    if (value) {
                        $("#otherlists li img.current").parents('li').each(function (i, el) {
                            var reg = new RegExp(value, 'gi');
                            var n = $(this);
                            var tl = n.attr("data-foname");
                            var res = reg.test(tl);
                            if (tl == null) {
                                return
                            };
                            if (res) {
                                $(el).addClass("active");
                                $(".library-empty").addClass("none");
                            } else {
                                $(el).removeClass("active");
                                if ($('#otherlists li.active').length == 0) {
                                    $(".library-empty").removeClass("none")
                                } else {
                                    $(".library-empty").addClass("none")
                                }
                            }
                        })
                    } else {
                        $(".zimu span.active").trigger('click');
                    }
                }, 60);
            });
            $(".fixed-nav li").eq(0).addClass("li-select");

            //模板渲染
            var template = document.getElementById('template_1').innerHTML;
            var template2 = document.getElementById('template_2').innerHTML;
            var some1, some2, some3;
            some1 = doT.template(template)(zhuandata);
            some2 = doT.template(template)(zongdata);
            some3 = doT.template(template)(shidata);
            $('#yishu').html(some1);
            $('#zonghe').html(some2);
            $('#teacher').html(some3);
            var otherhtml = doT.template(template2)(yidatas);
            $("#otherlists").html(otherhtml);
            $('#owl-demo').owlCarousel({
                items: 1,
                autoPlay: true
            });
           
            //Index.slider1();
            Index.listmenus();
            // new ZoomPic("box");
        },
        slider1: function () {
            var flag = true;
            var slid = Zepto(".slde-wrap.left").slider({
                content: '.slde-cont1',
                item: '.slde-cont1 .slde-li',
                loop: true,
                fn: function () {
                    if (sliderN1 === -1) {
                        sliderN1 = 0;
                        return;
                    }
                    if (sliderD1) {
                        // 顺滑动
                        sliderN1 = (sliderN1 + 1) % 3;
                        Zepto('.slde-point1 i').removeClass('active');
                        Zepto('.slde-point1 i.item' + sliderN1).addClass('active');
                    } else {
                        // 逆向滑动
                        sliderN1 = (sliderN1 + 2) % 3;
                        Zepto(' .slde-point1 i').removeClass('active');
                        Zepto(' .slde-point1 i.item' + sliderN1).addClass('active');
                    }
                    sliderD1 = true;
                }
            });
            Zepto('.left .slde-main').touchwipe({
                listen: 'x',
                stop: function (result) {
                    if (Math.abs(result.dx) > 3) {
                        if (result.dx > 0) {
                            sliderD1 = true;
                        } else {
                            sliderD1 = false;
                        }
                    }
                }
            });

        },
        //幻灯片
        listmenus: function () {
            var lists1 = $(".J_yishu");
            var lists2 = $(".J_zonghe");
            var lists3 = $(".J_teacher");
            var boxes = $('.J_box');
            lists1.carousel({
                auto: 1000,
                visible: 3,
                circular: true,
                vertical: false,
                preload: 0,
                auto: 0,
                scroll: 6,
                btnPrev: "#btn-left",
                btnNext: "#btn-right",
                btnNav: false
            });
            lists2.carousel({
                auto: 1000,
                visible: 3,
                circular: true,
                vertical: false,
                preload: 0,
                scroll: 6,
                auto: 0,
                btnPrev: "#btn-left1",
                btnNext: "#btn-right2",
                btnNav: false
            });
            lists3.carousel({
                auto: 1000,
                visible: 3,
                circular: true,
                vertical: false,
                preload: 0,
                scroll: 6,
                auto: 0,
                btnPrev: "#btn-left3",
                btnNext: "#btn-right4",
                btnNav: false
            });
            // boxes.carousel({
            //     visible: 3,
            //     circular: true,
            //     autoPlay:5000,
            //     vertical: false,
            //     preload: 0,
            //     scroll: 1,
            //     itemFirstInCallback: itemLoadCallbackFunction,
            //     btnPrev: "#btn-left5",
            //     btnNext: "#btn-right6",
            //     btnNav: false,
            //     addClassActive:true,
            // });
          
  
        }
    }
})();


function ZoomPic() {
    this.initialize.apply(this, arguments)
}
ZoomPic.prototype = {
    initialize: function (id) {
        var _this = this;
        this.wrap = typeof id === "string" ? document.getElementById(id) : id;
        this.oUl = this.wrap.getElementsByTagName("ul")[0];
        this.aLi = this.wrap.getElementsByTagName("li");
        this.prev = this.wrap.getElementsByTagName("pre")[0];
        this.next = this.wrap.getElementsByTagName("pre")[1];
        this.timer = null;
        this.aSort = [];
        this.iCenter = 3;
        this._doPrev = function () {
            return _this.doPrev.apply(_this)
        };
        this._doNext = function () {
            return _this.doNext.apply(_this)
        };
        this.options = [
            {
                fontSize: 20,
                width: '8',
                height: '8',
                top: 0.5,
                left: '0',
                zIndex: 3
            },
            {
                fontSize: '1',
                width: '10',
                height: '10',
                top: 0,
                left: '3.5',
                zIndex: 4
            },
            {
                fontSize: 20,
                width: '8',
                height: '8',
                top: 0.5,
                left: '0',
                zIndex: 3
            }
        ];
        for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
        this.aSort.unshift(this.aSort.pop());
        this.setUp();
        this.addEvent(this.prev, "click", this._doPrev);
        this.addEvent(this.next, "click", this._doNext);
        this.doImgClick();
        this.timer = setInterval(function () {
            _this.doNext()
        }, 2000);
        this.wrap.onmouseover = function () {
            clearInterval(_this.timer)
        };
        this.wrap.onmouseout = function () {
            _this.timer = setInterval(function () {
                _this.doNext()
            }, 2000);
        }
    },
    doPrev: function () {
        this.aSort.unshift(this.aSort.pop());
        this.setUp()
    },
    doNext: function () {
        this.aSort.push(this.aSort.shift());
        this.setUp()
    },
    doImgClick: function () {
        var _this = this;
        for (var i = 0; i < this.aSort.length; i++) {
            this.aSort[i].onclick = function () {
                if (this.index > _this.iCenter) {
                    for (var i = 0; i < this.index - _this.iCenter; i++) _this.aSort.push(_this.aSort.shift());
                    //_this.setUp()
                } else if (this.index < _this.iCenter) {
                    for (var i = 0; i < _this.iCenter - this.index; i++) _this.aSort.unshift(_this.aSort.pop());
                    //_this.setUp()
                }
            }
        }
    },
    setUp: function () {
        var _this = this;
        var i = 0;
        for (i = 0; i < this.aSort.length; i++) this.oUl.appendChild(this.aSort[i]);
        for (i = 0; i < this.aSort.length; i++) {
            this.aSort[i].index = i;
            if (i < 4) {
                this.css(this.aSort[i], "display", "block");
                this.doMove(this.aSort[i], this.options[i], function () {
                    _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {
                        opacity: 100
                    }, function () {
                        _this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {
                            opacity: 100
                        }, function () {
                        })
                    })
                });
            } else {
                this.css(this.aSort[i], "display", "none");
                this.css(this.aSort[i], "width", 0);
                this.css(this.aSort[i], "height", 0);
                this.css(this.aSort[i], "top", 0.5);
                this.css(this.aSort[i], "left", this.oUl.offsetWidth / 2)
            }
            if (i < this.iCenter || i > this.iCenter) {
                this.css(this.aSort[i].getElementsByTagName("img")[0], "opacity", 100)
                this.aSort[i].onmouseover = function () {
                    _this.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 100
                    })
                };
                this.aSort[i].onmouseout = function () {
                    _this.doMove(this.getElementsByTagName("img")[0], {
                        opacity: 100
                    })
                };
                this.aSort[i].onmouseout();
            } else {
                this.aSort[i].onmouseover = this.aSort[i].onmouseout = null
            }
        }
    },
    addEvent: function (oElement, sEventType, fnHandler) {
        return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
    },
    css: function (oElement, attr, value) {
        if (arguments.length == 2) {
            return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
        } else if (arguments.length == 3) {
            switch (attr) {
                case "width":
                    oElement.style[attr] = value + "rem";
                    break;
                case "height":
                oElement.style[attr] = value + "rem";
                    break;
                case "fontSize":
                oElement.style[attr] = value + "rem";
                    break;
                case "top":
                case "left":
                case "bottom":
                    oElement.style[attr] = value + "rem";
                    break;
                case "opacity":
                    oElement.style.filter = "alpha(opacity=" + value + ")";
                    oElement.style.opacity = value / 100;
                    break;
                default:
                    oElement.style[attr] = value;
                    break
            }
        }
    },
    doMove: function (oElement, oAttr, fnCallBack) {
        var _this = this;
        clearInterval(oElement.timer);
        oElement.timer = setInterval(function () {
            var bStop = true;
            for (var property in oAttr) {
                var iCur = parseFloat(_this.css(oElement, property));
                property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100));
                var iSpeed = (oAttr[property] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

                if (iCur != oAttr[property]) {
                    bStop = false;
                    _this.css(oElement, property, iCur + iSpeed)
                }
            }
            if (bStop) {
                clearInterval(oElement.timer);
                fnCallBack && fnCallBack.apply(_this, arguments)
            }
        }, 300000)
    }
};