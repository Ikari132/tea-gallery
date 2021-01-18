import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#app')
}).then(() => {
	console.log('client-side app has started');
});