function getQuery(){
	var str = (location.search.length>0 ? location.search.substring(1) : ''),
	args={},
	items = str.length ? str.split("&") : [],
	item = null,
	name = null,
	value = null;
	for(var i=0;i<items.length;i++){
        item=items[i].split("=");
        name=decodeURIComponent(item[0]);
        value=decodeURIComponent(item[1]);
        if(name.length){
        	args[name] = value;
        };
	};
	return args;
}
var vm = new Vue({
	el:'#app',
	data:{
		teacherList:[],
		condition:{},
	    grade:'年级',
	    isShowGrade:false,
	    searchGradeId:null,
	    subject:'学科',
	    isShowSubject:false,
	    searchSubjectId:null,
	    teacherType:'教师类型',
	    isShowType:false,
	    searchTypeId:null,
	    allIsShow:false,
	    condition:null,
	},
	mounted:function(){
		this.searchSubjectId = getQuery().id;
		var data = {
            'subject':this.searchSubjectId,
            'offset':0,
            'limit':20,
		};
		this.getData(data);
	},
	methods:{
		getData:function(dataObj){
			var that = this;
			$.ajax({
                'url':"http://api.zhituteam.com/api/teacher/lists",
                'type':"get",
                'dataType':"json",
                'data':dataObj,
                success:function(res){
                	that.teacherList = res.data.teacher;
                	res.data.condition.grade.forEach(function(item){
                        item.isSelected = false;
                	});
	            	res.data.condition.subject.forEach(function(item){
	                    item.isSelected = false;
	            	});
                	res.data.condition.type.forEach(function(item){
                        item.isSelected = false;
                	});
                	if(that.condition == null){
	                	that.condition = res.data.condition;
	                	that.condition.subject.forEach(function(k){
	                        if(that.searchSubjectId == k.id){
	                        	console.log(that.subject);
	                            that.allIsShow = false;
	                            k.isSelected =true;
	                            that.isShowSubject =true;
	                            that.subject = k.label;
	                            console.log(that.subject);
	                        }
	                    });
                	}
                },
			});
		},
		clickGrade:function(){
			this.allIsShow = true;
			this.isShowGrade = true;
			this.isShowSubject = false;
			this.isShowType = false;
		},
		clickSubject:function(){
			this.allIsShow = true;
			this.isShowGrade = false;
			this.isShowSubject = true;
			this.isShowType = false;
		},
		clickType:function(){
			this.allIsShow = true;
			this.isShowGrade = false;
			this.isShowSubject = false;
			this.isShowType = true;
		},
		clickItem:function(item){
			this.condition.grade.forEach(function(t){
				t.isSelected = false;
			});
			this.condition.subject.forEach(function(t){
				t.isSelected = false;
			});
			this.condition.type.forEach(function(t){
				t.isSelected = false;
			});
			item.isSelected = true;
			this.allIsShow = false;
			if(this.isShowGrade){
				this.grade = item.label;
				this.searchGradeId = item.id;
			};
			if(this.isShowSubject){
				this.subject = item.label;
				this.searchSubjectId = item.id;
			};
			if(this.isShowType){
				this.teacherType = item.label;
				this.searchTypeId = item.id;
			};
			var data = {
                'grade':this.searchGradeId,
                'subject':this.searchSubjectId,
                'type':this.searchTypeId,
                'offset':0,
                'limit':20,
			};
			this.getData(data);
		}
	},
})