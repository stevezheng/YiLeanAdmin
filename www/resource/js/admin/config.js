var config = {
  models: [
    {
      'name': 'Info'
      , 'type': 'normal'
      , 'cname': '信息'
      , 'fields': [
      ['avatar', 'image', '头像']
      , ['name', 'string', '名称']
      , ['address', 'string', '地址']
      , ['phone', 'string', '电话']
    ]
    },

    {
      'name': 'News'
      , 'type': 'normal'
      , 'cname': '新闻'
      , 'fields': [[ 'title', 'string', '标题'], ['content', 'string', '正文']]
    }
  ]
};