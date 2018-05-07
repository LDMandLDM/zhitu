var vm = new Vue({
	el:'#app',
	data:{
		teacher:{},
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getQuery:function(){
			var str = (location.search.length > 0 ? location.search.substring(1) : ''),
			args = {},
			items = str.length ? str.split("&"):[],
			item = null,
			name = null,
			value = null;
			for(i=0;i<items.length;i++){
				item = items[i].split("=");
				name = decodeURIComponent(item[0]);
				value = decodeURIComponent(item[1]);
				if(name.length){
					args[name] = value;
				}
			};
			return args;
		},
		getData:function(){
			var that = this;
			var nowId = this.getQuery().id;
			$.ajax({
				'url':"http://api.zhituteam.com/api/teacher/info/",
				'type':"get",
				'dataType':"json",
				'data':{
					id:nowId,
				},
				success:function(res){
					that.teacher=res.data.teacher;
				},
			});
		},
	},
})