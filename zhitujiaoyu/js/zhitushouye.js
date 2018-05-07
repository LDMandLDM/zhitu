var vm = new Vue({
	el:'#app',
	data:{
		teacherList:[],
        subjectList:[],
        banner:[],
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var that=this;
            $.ajax({
            	'url':"http://api.zhituteam.com/api/index",
            	'type':"get",
            	'dataType':"json",
            	success:function(res){
            		that.teacherList=res.data.teacher;
                    that.subjectList=res.data.subjects;
                    // that.banner=res.data.banner;
                    var newBannerList = [];
                    for(var i=0;i<5;i++){
                        var bannerList = newBannerList.push(res.data.banner[0])
                    }
                    that.banner = newBannerList;
                    that.swiperBanner();
            	},
            });
		},
        swiperBanner:function(){
            var mySwiper = new Swiper('.swiper-container',{
                loop:true,
                observer:true,
                pagination:{
                    el:'.swiper-pagination',
                },
            })
        },
        // getHref:function(item){
        //     return './vuexiangqing.html?id='+item;
        // },
	},
})