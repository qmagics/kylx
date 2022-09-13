import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/api/user', controller.user.index);

  app.beforeStart(async () => {
    const baidu = await app.curl('https://baidu.com');
    console.log(baidu.data);
  })

};