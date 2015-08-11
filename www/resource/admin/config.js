var config = {
  models: [
    {
      'name': 'Info' //Class的名称
      , 'type': 'normal' //生成模板类型，暂时只有normal
      , 'cname': '信息' //Class的中文名称，用于导航栏显示
      , 'fields': [
      ['avatar', 'image', '头像'] //三者分别是，字段名，字段类型，字段中文名称
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