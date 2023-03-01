import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
console.log(app);
app.load('https://prod.spline.design/jPigzQBeDeK3N4h4/scene.splinecode');
