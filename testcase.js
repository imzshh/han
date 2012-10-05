var han = require('./han');

han.letter('中aaaaa中¢∞§¶•誩aa文喳aa', function(err, result){
	if(err) throw err;
	console.log('原文：中aaaaa中¢∞§¶•誩aa文喳aa')
	console.log('异步结果：' + result, '\n')
});

han.letter('中EnglishWords¢∞§¶•ªº文', '-', function(err, result){
	console.log('原文：中EnglishWords¢∞§¶•ªº文')
	console.log('异步结果：' + result)
});
