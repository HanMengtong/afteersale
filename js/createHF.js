createHeader();
createFooter();
//创建头部
function createHeader(){
	var header = $('<header></header>');
	
	var comWdiv = $('<div></div>');
	comWdiv.addClass('comW');
	comWdiv.addClass('clearFix');
	
	var logo = $('<a></a>');
	logo.addClass('logo');
	logo.attr('href','index.html');
	
	var btnFix = $('<div></div>');
	btnFix.addClass('btnFix');
	btnFix.addClass('clearFix');
	
	var btnR = $('<div></div>');
	btnR.addClass('btnR');
	btnR.addClass('clearFix');
	
	var proIntro = $('<a></a>');
	proIntro.html('产品说明');
	proIntro.attr('href','prointro.html');
	
	var question = $('<a></a>');
	question.html('常见问题');
	question.attr('href','question.html');
	
	var login = $('<a></a>');
	login.html('登录');
	login.attr('href','login.html');//登录地址
	
	var register = $('<a></a>');
	register.html('注册');
	register.attr('href','login.html');//注册地址
	
	$(btnR).append(proIntro);
	$(btnR).append(question);
	$(btnR).append(login);
	$(btnR).append(register);
	
	var loginBtnR = $('<div></div>');
	loginBtnR.addClass('loginBtnR');
	loginBtnR.addClass('clearFix');
	
	var proIntro1 = $('<a></a>');
	proIntro1.html('产品说明');
	proIntro1.attr('href','prointro.html');
	
	var question1 = $('<a></a>');
	question1.html('常见问题');
	question1.attr('href','question.html');
	
	var center = $('<a></a>');
	center.html('个人中心');
	center.attr('href','Basic_data.html');
	
	$(loginBtnR).append(proIntro1);
	$(loginBtnR).append(question1);
	$(loginBtnR).append(center);
	
	$(btnFix).append(btnR);
	$(btnFix).append(loginBtnR);
	
	$(comWdiv).append(logo);
	$(comWdiv).append(btnFix);
	$(header).append(comWdiv);
	$('body').prepend(header);
}
//创建尾部
function createFooter(){
	var footer = $('<footer></footer>');
	footer.addClass('clearFix');
	
	var comWdiv = $('<div></div>');
	comWdiv.addClass('comW');
	comWdiv.addClass('clearFix');
	
	var logoFooter = $('<span></span>');
	logoFooter.addClass('logoFooter');
	
	var footerRight = $('<div></div>');
	footerRight.addClass('footerRight');
	footerRight.addClass('clearFix');
	
	var linkFix = $('<div></div>');
	linkFix.addClass('linkFix');
	
	var about = $('<a></a>');
	about.html('关于我们');
	about.attr('href','about.html');
	
	var server = $('<a></a>');
	server.html('服务协议');
	server.attr('href','service.html');
	
	var advice = $('<a></a>');
	advice.html('意见反馈');
	advice.attr('href','advice.html');
	
	var help = $('<a></a>');
	help.html('帮助中心');
	help.attr('href','help.html');
	
	var messUl = $('<ul></ul>');
	
	var lineLi2 = $('<li><a href="#">营业执照</a><a href="#">软件著作权登记证书</a><a href="#">互联网药品信息服务资格证书：(京)•经营性•2014•0011</a></li>');
	
	var lineLi3 = $('<li><span>Copyright 2017-2020</span><span>北京西科码医疗器械股份有限公司</span><span>北京市海淀区西北旺永丰屯路538号中关村医学转化中心2号楼</span></li>');
	
	var lineLi4 = $('<li><span>ICP证书：京ICP备16566565号</span><span>技术支持：西科码信息技术部</span></li>');
	
	$(linkFix).append(about);
	$(linkFix).append(server);
	$(linkFix).append(advice);
	$(linkFix).append(help);
	
	$(messUl).append(lineLi2);
	$(messUl).append(lineLi3);
	$(messUl).append(lineLi4);
	
	$(footerRight).append(linkFix);
	$(footerRight).append(messUl);
	
	$(comWdiv).append(logoFooter);
	$(comWdiv).append(footerRight);
	$(footer).append(comWdiv);
	$('body').append(footer);
}


