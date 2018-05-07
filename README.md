# zhitu
## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://api.zhituteam.com/api/index`
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|cate |否  |int |分类id|


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      "teacher":[
        {
          "id":,
          "realname":"",
          "name":"",
          "image":"",
          "subject":[ 
            {
              "id":,
              "label":"",
              "sort":""
            },
          ],
          "grade":[
            "id":,
            "label":"",
            "sort":"",
          ],
          "type":[
            "id":,
            "label":"",
            "sort":"",
          ],
          "extend_tag":[
            "id":,
            "label":"",
            "sort":"",
          ],
          "phone":"",
          "school":"",
          "souece":"",
          "is_confirm":,
          "is_star":,
          "teach_year":"",
          "teach_time":"",
        },
      ],
      "subjects":[
        {
          "id":,
          "name":"",
          "icon":"",
        },
      ],
      "banner":[
        "url":"",
        "image":"",
      ]
    }
  }
```
## 详情页
**简要描述：** 

- 详情页接口

**请求URL：** 
- ` http://api.zhituteam.com/api/teacher/info/ `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |博客id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "teacher":{
          "id":,
          "realname":"",
          "name":"",
          "image":"",
          "subject":[
            {
              "id":,
              "label":"",
              "sort":"",
            }
          ],
          "grade":[
                {
                    "id":,
                    "label":"",
                    "sort":
                }
            ],
            "type":[
                {
                    "id":,
                    "label":"",
                    "sort":
                }
            ],
            "extend_tag":[
                {
                    "id":,
                    "label":"",
                    "sort":
                }
            ],
            "phone":"",
            "school":"",
            "source":,
            "is_confirm":,
            "is_star":,
            "teach_year":,
            "teach_time":,
            "is_collect":,
            "is_select":,
            "realprice":,
            "price":"",
            "intro":"",
            "teacher_case":[
              {
              "id":,
              "title":"",
              "content":"",
              "start_time":"",
              "end_time":""
            }
            ],
      }
    }
  }
```
## 学科列表(一个三级联动筛选列表,根据年级、教师类型或学科分类来筛选出来对应条件的列表)
**简要描述：** 

- 学科列表接口

**请求URL：** 
- ` http://api.zhituteam.com/api/teacher/lists `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |学科id|

 **返回示例**

``` 
{
  "teacher":[
    {
      "id":,
      "realname":"",
      "name":"王老师(女)",
      "image":"",
       "subject":[
                    {
                        "id":,
                        "label":"",
                        "sort":
                    }
                ],
                "grade":[
                    {
                        "id":,
                        "label":"",
                        "sort":
                    }
                ],
                "type":[
                    {
                        "id":,
                        "label":"",
                        "sort":
                    }
                ],
                "extend_tag":[
                    {
                        "id":,
                        "label":"",
                        "sort":
                    }
                ],
                "phone":"",
                "school":"",
                "source":,
                "is_confirm":,
                "is_star":,
                "teach_year":,
                "teach_time":
    },
  ]
}

```
