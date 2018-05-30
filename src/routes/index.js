const Clue = r => require(['views/clue/clue'], r);
const MyTask = r => require(['views/clue/myTask'], r);
const NotFound = r => require(['views/notfound'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  { path: '', 
    redirect: { name: 'untreated' }, 
    meta: { requireAuth: true },
  },
  { path: '/untreated', component: Clue, name: 'untreated', meta: { requireAuth: true } },
  { path: '/myTask', component: MyTask, name: 'myTask', meta: { requireAuth: true } },
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
