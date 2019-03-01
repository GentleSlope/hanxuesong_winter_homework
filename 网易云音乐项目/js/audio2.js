
// 类初始化

$(function(){

	var song = [
		{
			'cover' : 'img/audio/cover2.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=290397&key=579621905',
			'title' : 'Memories'
		},
		{
			'cover' : 'img/audio/cover.png',
			'src' : 'https://api.bzqll.com/music/netease/url?id=163726&key=579621905',
			'title' : 'number one'
		},
		{
			'cover' : 'img/audio/cover1.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=814018&key=579621905',
			'title' : '大橋のぞみ - 黒ネコのタンゴ'
		},
		{
			'cover' : 'img/audio/cover3.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=805235&key=579621905',
			'title' : '黒うさP,初音ミク - 千本桜'
		},
		{
			'cover' : 'img/audio/cover4.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=710970&key=579621905',
			'title' : '极乐净土'
		}
	];

	var audioFn = audioPlay({
		song : song,
		autoPlay : false  //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
	});

	/* 向歌单中添加新曲目，第二个参数true为新增后立即播放该曲目，false则不播放 */
	audioFn.newSong({
		'cover' : 'img/audio/cover5.jpg',
		'src' : 'https://m10.music.126.net/20190228112021/28560cade3f9c549c5d7537f26ee4f17/ymusic/9e82/20e4/8580/bd7c90147cf782ea897fc9652c76b458.mp3',
		'title' : 'B.A.A.B'
	},false);

	/* 暂停播放 */
	//audioFn.stopAudio();

	/* 开启播放 */
	//audioFn.playAudio();

	/* 选择歌单中索引为3的曲目(索引是从0开始的)，第二个参数true立即播放该曲目，false则不播放 */
	//audioFn.selectMenu(3,true);

	/* 查看歌单中的曲目 */
	//console.log(audioFn.song);

	/* 当前播放曲目的对象 */
	//console.log(audioFn.audio);
});