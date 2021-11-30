/*
 * @Author: wangzhu
 * @Date: 2021-11-30 20:25:53
 * @LastEditTime: 2021-11-30 20:34:46
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  hooks: {
    "init": function() {
      var domain = this.config.options.pluginsConfig.domain;
      document.domain = domain
      console.log('init', domain)
    },
    "page:before": function (page) {
      var domain = this.config.options.pluginsConfig.domain;
      document.domain = domain
      console.log('page:before', domain)
    }
  }
};