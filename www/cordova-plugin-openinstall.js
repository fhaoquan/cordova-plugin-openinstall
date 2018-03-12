var exec = require('cordova/exec');

module.exports = {
    
    /**
     * 获取安装参数
     * @param onSuccess 成功回调：数据格式为 {'channel': 1002, 'data': {'key': 'value'}}
     * @param time 超时时间：整形值，单位秒
     */
    getInstall: function (onSuccess, onError, time){
        exec(onSuccess, onError, "OpenInstallPlugin", "getInstall", [time]);
    },

    /**
     * 获取唤醒参数 （暂未实现功能）
     * @param url 唤起app的完整uri
     */
    getWakeUp: function (onSuccess, onError, url){
        exec(onSuccess, onError, "OpenInstallPlugin", "getWakeUp", [url]);
    },

    /**
     * 上报注册量
     */
    reportRegister: function(){
        function pass() {};
        exec(pass, pass, "OpenInstallPlugin", "reportRegister", []);
    }

};
