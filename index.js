/*
 * @Author: wangzhu
 * @Date: 2021-11-30 20:25:53
 * @LastEditTime: 2021-11-30 23:37:04
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  hooks: {
    "init": function() {
      console.log('lala')
      var domain = this.config.pluginsConfig.changedomain.domain;
      document.domain = domain
      console.log('init', domain)
    },
    "page:before": function (page) {
      console.log('eee')
      var domain = this.config.pluginsConfig.changedomain.domain;
      document.domain = domain
      console.log('page:before', domain)
      return page
    }
  }
};