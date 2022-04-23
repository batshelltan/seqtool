var clncfg = new clncfg();

function clncfg() {

    this.namelist = {
        "2021x4": ["谭锦炜","蔡熠泽","朱赠依","吴烨楠","徐语嫣","刘宸晨","曾汀笖","曾睿宸","刘辰蕊","吕成楷","高希雅","郑奕博","郑清如","陈臻宇","杨意涵","陈翌森","邱允","谭知柯","曹欣悦","黄浩凯","袁钰涵","金浚泽","陈雨恬","蔡宸羽","陈梦洁","洪晨杰","王雨诺","金楷瞳","朱佳昕","曾一凡","徐姝辰","毛伊诺","魏凌瑶","裴子熠","顾鑫煜"]
    },

    /**
     * 解析未接龙的人员
     * @param classid
     * @param wechattxtVal
     */
    this.checkUnconnectNamelist = function (classid, wechattxtVal) {
        var res = {
            success: false,
            errNo: -1,
            errMsg: ""
        };
        if(wechattxtVal == "" || wechattxtVal == null) {
            res.errMsg = "请填写微信接龙内容的文本信息！"
            return res;
        }
        var namelistinfo = this.namelist[classid];
        if(namelistinfo === undefined) {
            res.errMsg = "未找到班级名单信息";
            return res;
        }
        res.errNo = 0;
        var unconnectNamelist = [];
        for(var i in namelistinfo) {
            var name = namelistinfo[i];
            //接龙文字内容中未找到名字，则放入未接龙名单列表
            if(wechattxtVal.indexOf(name) == -1) {
                unconnectNamelist.push(name);
            }
        }
        //没有未接龙的名单，才设置true
        if(unconnectNamelist.length == 0) {
            res.success = true;
        } else {
            var errMsg = "未接龙学生名单：\n" + this.toArrayStr(unconnectNamelist);
            res.errMsg = errMsg;
        }
        res.data = unconnectNamelist;
        return res;
    },

    this.toArrayStr = function (arrdata) {
        var txt = "";
        if(arrdata == null || arrdata.length == 0) {
            return txt;
        }
        for(var i in arrdata) {
            if(i > 0) {
                txt += "、";
            }
            txt += arrdata[i];
        }
        return txt;
    }

}