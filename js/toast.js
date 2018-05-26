'use strict';
(function($,window){ 
	//动态加载animate
	var loadStyles = function(url) {
		var hasSameStyle = false;
		var links = $('link');
		for(var i = 0;i<links.length;i++){
			if(links.eq(i).attr('href') == url){
				hasSameStyle = true;
				return
			}
		}

		if(!hasSameStyle){
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = url;
			document.getElementsByTagName("head")[0].appendChild(link);
		}
    }

    loadStyles('css/animate.css');

	//显示提示信息    toast
	$.fn.toast = function(options){
		var $this = $(this);
		var _this = this;
		return this.each(function(){
			$(this).css({
				position:'relative'
			});
			var top = '';		//bottom的位�?
			var translateInfo = ''; 	//居中和不居中时的tarnslate

		    var box = '';   //消息元素
		    var defaults = {
		    	position:  			  "absolute", 				//不是body的话就absolute
		    	animateIn:  		  "fadeIn",					//进入的动�?
		    	animateOut: 		  "fadeOut",				//结束的动�?
				padding:              "10px 20px",              //padding
				background:           "rgba(7,17,27,0.66)",     //背景�?
				borderRadius:         "6px",                    //圆角
				duration:             3000,                     //定时器时�?
				animateDuration: 	  500, 						//执行动画时间
				fontSize:             14,                   	//字体大小
				content:              "这是一个提示信�?",       //提示内容
				color:                "#fff",                   //文字颜色
				top:            	  "80%",                	//bottom底部的位�?    具体的数�? 或者center  垂直居中
				zIndex:               1000001,                	//层级
				isCenter:   		  true, 					//是否垂直水平居中显示
				closePrev: 			  true, 					//在打开下一个toast的时候立即关闭上一个toast
		    }
		    
		    var opt = $.extend(defaults,options||{});
		    var t = '';
		  
			// setTimeout(function(){
			//   	box.addClass('show');
			// },10);

			top = opt.isCenter===true? '50%':opt.top;

			defaults.isLowerIe9 = function(){
				return (!window.FormData);
			}

			// translateY(-50%)
			// translateInfo = opt.isCenter===true? 'translate3d(-50%,0,0)':'translate3d(-50%,-50%,0)';

		    defaults.createMessage = function(){
				if(opt.closePrev){
					$('.cpt-toast').remove();
				}
				box = $("<span class='animated "+opt.animateIn+" cpt-toast'></span>").css({
					"position":opt.position,
					"padding":opt.padding,
					"background":opt.background,
					"font-size":opt.fontSize,
					"-webkit-border-radius":opt.borderRadius,
					"-moz-border-radius":opt.borderRadius,
					"border-radius":opt.borderRadius,
					"color":opt.color,
					"top":top,
					"z-index":opt.zIndex,
					"-webkit-transform":'translate3d(-50%,-50%,0)',
			        "-moz-transform":'translate3d(-50%,-50%,0)',
			        "transform":'translate3d(-50%,-50%,0)',
			        '-webkit-animation-duration':opt.animateDuration/1000+'s',
	    			'-moz-animation-duration':opt.animateDuration/1000+'s',
	    			'animation-duration':opt.animateDuration/1000+'s',
				}).html(opt.content).appendTo($this);
				defaults.colseMessage();
		    }

		    defaults.colseMessage = function(){
		    	var isLowerIe9 = defaults.isLowerIe9();
		    	if(!isLowerIe9){
			    	t = setTimeout(function(){
			    		box.removeClass(opt.animateIn).addClass(opt.animateOut).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			    			box.remove();
			    		});
			    	},opt.duration);
		    	}else{
		    		t = setTimeout(function(){
			    		box.remove();
			    	},opt.duration);
		    	}
		    }

		    defaults.createMessage();
		})
	};
})(jQuery,window); 


var showMessage = function(content,duration,isCenter,animateIn,animateOut){
	var animateIn = animateIn || 'fadeIn';
	var animateOut = animateOut || 'fadeOut';
	var content = content || '这是一个提示信�?';
	var duration = duration || '3000';
	var isCenter = isCenter || false;
	$('body').toast({
		position:'fixed',
		animateIn:animateIn,
		animateOut:animateOut,
		content:content,
		duration:duration,
		isCenter:isCenter,
	});
}