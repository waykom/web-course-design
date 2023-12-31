window.addEventListener('load', function() {

	trans()
	function trans() {
		let innerList = document.querySelector('.inner-list')
		innerList.style.opacity = '1'
		innerList.style.transform = 'translateY(0)'

		let textInner = document.querySelector('.text-inner')
		textInner.style.opacity = '1'
		textInner.style.transform = 'translateY(0)'
	}
	


	;(function() {
	// 历史模块

		// 内容数据 
		let data = [
			{
				title: '历史沿革',
				content: `唐乾封二年（667年）在境内置严州，辖循德、归化、怀义3县。天宝二年（743年），怀义县更名为来宾县，据《元和郡县志》记载：来宾“在都泥江北，来宾水（今北之江）东，故以得名”。宋、元两代属象州。明、清属柳州府。 民国2年（1913年）废府制，县由省直辖。民国6年（1927年）设立柳江道，来宾县属之。民国38年（1949年）属广西省第十三行政督察区所辖。 1949年11月30日，解放军占领来宾县，由柳州专区所辖。1953年改属宜山专区。1954年，来宾县政府驻地由城厢迁至水落村（今来宾城区）。1958年，宜山专区更名柳州专区，来宾县属之，专署驻柳州市。1970年，柳州专区改为柳州地区。1981年6月，由来宾县析置合山市。2002年，撤销柳州地区，新设立地级来宾市，来宾县改为来宾市兴宾区，来宾市辖原柳州地区的忻城县、象州县、武宣县、金秀瑶族自治县，代管县级合山市。`,
				img: 'imgs/inner01.jpg',
				imgMsg: '来宾革命烈士纪念碑位于红水河岸边的广西来宾市人民公园最高处，建于1990年，落成于1991年。'
			},
			{
				title: '迁江游击区的武装斗争',
				content: `1946年12月，吴寿峣从南宁黄花岗中学回到家乡平阳（原三寨乡）后，与进步青年吴堪立、石颂勋联系，通过组织读书会、开办补习班和排演“文明戏”等形式，向青年学生宣传革命道理，发动群众反“三征”。他们的活动，引起了原中共陶邓支部党员韦鸿基的注意，并很快取得联系。1947年初，在韦鸿基的策划下，三寨、迁江、石陵、陶邓等地进步青年召开会议，会议中在众人的倡导下成立了“迁江地下革命活动小组”，韦鸿基担任组长。1947年秋，为配合桂中南各地的中秋起义，“迁江地下革命活动小组”集结游民武装300多人枪，准备攻下迁江县城并夺取陶邓、石陵、三寨等的反动武装后，即拉队伍上山，形成武装割据。但这次暴动由于准备不足、规划不周，造成泄密，致使未能实施。暴动流产后，引起了反动当局报复，四处出动搜捕地下武装人员。1948年2月10日（正月初一），韦鸿基在家中被围捕，突围时不幸中弹牺牲，后被割下头颅，悬挂在迁江太平社（茅草街）示众3天。不久后，吴堪立也在家中被捕，受尽各种酷刑。此后，吴寿峣、石颂勋等人一面更加隐秘地活动，一面潜到宾阳、上林等地寻找党组织。经多方联系，1948年秋，吴寿峣在上林乔贤山区与上林地下党领导人韦汉强见面。韦汉强指导吴寿峣等人以串联方式，秘密发动群众，筹集枪弹，做好创建武工队、根据地的准备。根据指导意见，吴寿峣返回后与覃汉礼、潘思齐、石颂勋等人召开会议，并做好分工后迅速开展动员群众和筹建武工队的准备，很快培养了一批骨干、筹集了一批枪支弹药、恢复了一批联络站。`,
				img: 'imgs/inner02.png',
				imgMsg: '弄水屯（游击队宿营地）'
			},
			{
				title: '日军入侵来宾、迁江及其暴行',
				content: `抗日战争全面爆发后，1938年7月16日，日军飞机两批17架次空袭迁江县城，投弹200余枚，炸死50多人，炸毁国民党军车14辆，房屋130多间，致使该县公私财物损失1000万元以上。1939年9月3日，日军飞机再次狂轰滥炸迁江县城，当时数以百计的各种车辆排长队待渡，成为日机轰炸的目标。此次轰炸，炸毁民房400余间，人员伤亡及财产损失无数，损失十分惨重。`,
				img: 'imgs/inner03.jpg',
				imgMsg: '来宾老县城（城厢）'
			},
			{
				title: '来宾、迁江人民的抗日斗争',
				content: `来宾、迁江沦陷期间，两县政府均组织起了抗日自卫队，韦善隆、陈德光、韦业莽等本地有志青年纷纷加入抗日武装，开展武装斗争。当时，来宾、迁江还没有建立起统一的中共地方党组织，分散在两县的中共党员和积极分子，利用国民党的地方武装番号，建立抗日游击队或组织党员和抗日积极分子进入国民党的政权机关和军事部门，贯彻党的抗日民族统一战线方针政策，壮大了来宾、迁江两县抗日武装力量，为来宾、迁江人民取得抗战的最后胜利作出了重大贡献。`,
				img: 'imgs/inner04.jpg',
				imgMsg: '凤凰黄安桥旧址'
			},
			{
				title: '青山烽火：青山支部的建立和游击区的发展',
				content: `青山地区与来宾县相邻，是指以贵县大村、青岭（今属兴宾区小平阳镇）、五山等为中心的区域。此处是中共桂中南地工委通往宾阳、来宾、迁江、上林等县进行革命活动的重要区域和交通要道。1947年春，宾阳地下党组织转移到东区新梁村、石灰村一带，宣传发动群众，开展新区革命活动。宾阳县地下党员李杏安以亲戚关系，活动到贵县，发展青岭乡蒙歌和大村乡里鸭村毛郁明加入革命队伍。1947年11月，国民党宾阳县制造了“宾阳暴动案”，逮捕宾阳县进步人士，致使中共宾阳党组织的活动陷于停顿。12月，张声震受党组织委派，到宾阳联络宾阳、永淳、上林、贵县、武宣等县的党组织、党员`,
				img: 'imgs/inner05.jpg',
				imgMsg: '中共青岭乡刘村交通站旧址位于兴宾区小平阳镇刘村村委刘村'
			},
			{
				title: '桂中支队来宾县大队的武装斗争',
				content: `1949年5月中旬，广西省农委委员黄传林向廖联原传达了罗城县木偶会议精神和成立桂中地工委，并将达开纵队改建为桂中人民解放总队等指示，廖联原任桂中地工委书记、总队司令员兼政委，韦纯束任地工委副书记、总队副政委兼政治部主任，韦志龙任总队副司令。地工委和总队成立后不久，韦志龙率领一个工作队到南泗地区活动，并成立了红河武工队（后扩建为南泗红河武工中队），负责人蒙光朝、韦尚谋，武工队共有队员30多人，包含了南泗、龙南两个乡的队员。8月，红河武工中队改建为来宾县南河大队，统一领导南泗、龙南、石塘（现蒙村镇），寺脚、中山（现城厢镇）等乡的桂中系统的游击队。大队政委方宏誉（兼），大队负责人蒙光朝、韦尚谋。南河大队约60多人。9月，南河大队政委方宏誉（兼）到龙南乡根村召开龙南地区游击队骨干会议，蒙光朝则到龙南乡下王村召开骨干会议。蒙光朝在会上宣布成立龙南中队，中队负责人蒙庆昭、蒙家清。全队有游击队员约20多人。9月下旬，石塘地区成立游击中队，中队负责人巫富德、余威精，全队有游击队员30多人。10月，桂中地工委决定将桂中人民解放总队扩建为中国人民解放军桂中支队。10月下旬，韦志龙决定把来宾县境内属于桂中支队领导的南泗中队、龙南中队、石塘中队、石牙中队和寺脚、中山2支游击队，统一组成中国人民解放军桂中支队来宾县大队。桂中支队来宾县大队政委方宏誉，大队负责人蒙光朝、韦尚谋、黄达，队部设在南泗乡高岭村。大队下辖南泗、石塘、龙南、石牙4个中队，还有寺脚、中山2支游击队。桂中支队来宾县大队共有武装队员100多人，贫雇农会员300多人。`,
				img: 'imgs/inner06.jpg',
				imgMsg: '中国人民解放军桂中支队来宾县大队同志和南泗公社负责同志留影 1983.3.31于南泗。'
			},
			{
				title: '新的来宾特支在三五、五山领导的武装斗争',
				content: `1949年全国的革命斗争形势向好，当年夏，中共桂中南地工委决定撤销贵（县）武（宣）来（宾）特支，来宾南部地区的斗争由桂中南地工委委员、贵县工委书记梁寂溪直接领导。7月，梁寂溪派中共党员赖伟、李铁华、黄克明到来宾协助建立各种组织工作，将分界（现三五乡）、石牙、寺脚地区与贵县的樟木、青岭、大村、五山游击区连成一片，同时连通贵县、来宾县、武宣县游击区；并指示他们抓好调查研究工作、宣传工作和组织工作，抓好反“三征”、反“清乡”斗争和肃清反动派斗争。赖伟到来宾后根据这地区覃姓居多的情况，为利于革命工作改名为覃敬威。`,
				img: 'imgs/inner07.png',
				imgMsg: '来宾独立大队游击队员荣誉证'
			}
		]

		let ul = document.querySelector('.inner-list')
		// 遍历内容数组 添加ul的子节点li 
		for (let i = 0; i < data.length; i++){
			let li = document.createElement('li')
			li.innerHTML = data[i].title
			li.title = data[i].title
			ul.appendChild(li)
		}
		// 获取li伪数组
		let lis = document.querySelectorAll('.inner-list li')

		// 获取标题 内容 图片
		let title = document.querySelector('.title')
		let content = document.querySelector('.content')
		let img = document.querySelector('.img-inner')
		let imgMsg = document.querySelector('.img-msg')

		let innerBox = document.querySelector('.text-inner')

		title.innerHTML = data[0].title
		content.innerHTML = data[0].content
		img.src = data[0].img
		imgMsg.innerHTML = data[0].imgMsg

		lis[0].classList.add('active')
		// 遍历li伪数组 添加对应内容
		for(let i = 0; i < lis.length; i ++){
			lis[i].addEventListener('click', function() {

				console.log(data[i].img)
				document.querySelector('.inner-list .active').classList.remove('active')
				this.classList.add('active')
				title.innerHTML = data[i].title
				content.innerHTML = data[i].content
				img.src = data[i].img
				imgMsg.innerHTML = data[i].imgMsg
			})
		}

	} ());
})
