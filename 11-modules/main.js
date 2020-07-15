// import {hello} from './b.js';

console.log(`hello browser`);

document.getElementById('lazy-load')
    .addEventListener('click', () => {
        console.log('button clicked');
        // Promise<module>
        import('./b.js').then((module) => {
            const hello = module.hello;
            console.log(hello);
        })
    });