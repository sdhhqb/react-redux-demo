var Constants = {
	MENUDATA: [
		{
			"name": "产品",
			"level": 1,
			"route": false,
			"child": [
				{
					"name": "产品列表",
					"level": 2,
					"route": "product/productlist",
					"child": false
				},
				{
					"name": "销售报表",
					"level": 2,
					"route": "product/salelist",
					"child": false
				}
			]
		},
		{
			"name": "用户",
			"level": 1,
			"route": false,
			"child": [
				{
					"name": "用户列表",
					"level": 2,
					"route": "userlist",
					"child": false
				}
			]
		},
		{
			"name": "菜单测试一1级",
			"level": 1,
			"route": "test1lv1",
			"child": [
				{
					"name": "菜单测试一2级1",
					"level": 2,
					"route": "test1lv201",
					"child": [
						{
							"name": "菜单测试一3级",
							"level": 3,
							"route": "test1lv301",
							"child": false
						}
					]
				},
				{
					"name": "菜单测试一2级2",
					"level": 2,
					"route": "test1lv202",
					"child": [
						{
							"name": "菜单测试一3级",
							"level": 3,
							"route": "test1lv302",
							"child": false
						}
					]
				}
			]
		},
		{
			"name": "菜单测试二1级",
			"level": 1,
			"route": "test2lv1",
			"child": [
				{
					"name": "菜单测试二2级",
					"level": 2,
					"route": "test2lv2",
					"child": [
						{
							"name": "菜单测试二3级",
							"level": 3,
							"route": "test2lv3",
							"child": false
						}
					]
				}
			]
		},
		{
			"name": "菜单测试三1级",
			"level": 1,
			"route": "test3lv1",
			"child": false
		}
	]
};

export default Constants;