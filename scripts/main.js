//换肤
// var $li = $('.changeSkin').children();
// for (var i = 0, len = $li.length; i < len; i++) {
// 	$li[i].click(function(){
// 		if (i=0) {
// 			$('body').addClass('pink');
// 		}else
// 		if (i=1) {
// 			$('body').addClass('purple');
// 		}else
// 		if (i=2) {
// 			$('body').addClass('blue');
// 		}else	
// 		{
// 			$('body').addClass('green')
// 		}		

// 	})
// }
var skinList = document.getElementById('skinControl').getElementsByTagName('li');
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < skinList.length; i++) {
	(function(i){
			skinList[i].onclick = function(){
				//点击每个li元素，更换对应的颜色样式
				//switch i
				//点击后清除body的
				body.classList.remove('pink','purple','blue','green')
				localStorage.setItem('webSkin',i);
				switch (i){
					case 0:
					    body.classList.add('pink');
					    break;
					case 1:
					    body.classList.add('purple');
					    break;
					case 2:
					    body.classList.add('blue');
					    break;
					default:
						body.classList.add('green');
				}
			};
	})(i);
}
//localstorage保存换肤效果
window.onload = function(){
	if (localStorage.getItem('webSkin')) {
		var skin = parseInt(localStorage.getItem('webSkin'));
		switch (skin){
					case 0:
					    body.classList.add('pink');
					    break;
					case 1:
					    body.classList.add('purple');
					    break;
					case 2:
					    body.classList.add('blue');
					    break;
					default:
						body.classList.add('green');
		}
	}else{
		localStorage.setItem('webSkin','3')
		body.classList.add('green');
	}
};



//变为三列分布
$(document).ready(function(){
	$(".icon1").click(function(){
		$("#tops").removeClass("tops").addClass("newGoods");
	});
});
$(function(){
	$(".icon4").click(function(){
		$("#bottoms").removeClass("tops").addClass("newGoods");
	});
});
//变为4列分布
$(function(){
	$(".icon2").click(function(){
		$("#bottoms").removeClass("newGoods").addClass("tops");
	});
});
$(function(){
	$(".icon3").click(function(){
		$("#tops").removeClass("newGoods").addClass("tops");
	});
});


// 回到顶部
$(function(){
	$(window).on("scroll",function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $("body").length != 0  ){
				var w = $(window).width(),mw = $("body").width();
				if( (w-mw)/2 > 70 )
					$("#go-top").css({"left":(w-mw)/2+mw+20});
				else{
					$("#go-top").css({"left":"auto"});
				}
			}
			//鼠标向下滑动，淡入fadein，去掉被设置了隐藏的dn类名，这样回到顶部图标就会显示
			$("#go-top").fadeIn(function(){
				$(this).removeClass("dn");
			});
		}else{
			//屏幕不滚动，则淡出fadeout，加上被设置了隐藏的dn类名，这样回到顶部图标就会被隐藏
			$("#go-top").fadeOut(function(){
				$(this).addClass("dn");
			});
		}	
	});
	$("#go-top .go").on("click",function(){
		$("html,body").animate({"scrollTop":0},500);
	});

	$("#go-top .uc-2vm").hover(function(){
		$("#go-top .uc-2vm-pop").removeClass("dn");
	},function(){
		$("#go-top .uc-2vm-pop").addClass("dn");
	});
});

// tab切换
var timeoutid;
$(document).ready(function(){
	$("#tableList li").each(function(index){
		var liNode = $(this);
		$(this).mouseover(function(){
			timeoutid = setTimeout(function(){        //添加一个定时器
			$(".current").removeClass("current");//隐藏当前class
			$("#tableList li.tabin").removeClass("tabin");//隐藏当前class
			$("div.tabContent").eq(index).addClass("current");//移到那个li标签就给哪个加上div
			liNode.addClass("tabin");//移到那个li标签就给那个li标签添加class属性tabin
			},300)     //0.3秒延时
		}).mouseout(function(){
			clearTimeout(timeoutid);
		});
	});
});