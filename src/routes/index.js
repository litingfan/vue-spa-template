const Clue = r => require(['views/clue/clue'], r);
const MyTask = r => require(['views/clue/myTask'], r);
const Tabulation = r => require(['views/clue/tabulation'], r);
const MyCarsource = r => require(['views/clue/myCarsource'], r);
const MyRemind = r => require(['views/clue/myRemind'], r);
const CcMonitor = r => require(['views/clue/ccMonitor'], r);
const AnonymousClue = r => require(['views/clue/AnonymousClue'], r);
const Twomaintenance = r => require(['views/clue/twomaintenance'], r);
const CarList = r => require(['views/car/list'], r);
const carMonitor = r => require(['views/car/monitor'], r);
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
  { path: '/tabulation', component: Tabulation, name: 'tabulation', meta: { requireAuth: true } },
  { path: '/myCarsource', component: MyCarsource, name: 'myCarsource', meta: { requireAuth: true } },
  { path: '/myRemind', component: MyRemind, name: 'myRemind', meta: { requireAuth: true } },
  { path: '/ccMonitor', component: CcMonitor, name: 'ccMonitor', meta: { requireAuth: true } },
  { path: '/anonymousClue', component: AnonymousClue, name: 'anonymousClue', meta: { requireAuth: true } },
  { path: '/twomaintenance', component: Twomaintenance, name: 'twomaintenance', meta: { requireAuth: true } },
  { path: '/car/list', component: CarList, name: 'carOperatorList', meta: { requireAuth: true } },
  { path: '/car/monitor', component: carMonitor, name: 'carOperatorMonitor', meta: { requireAuth: true } },
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
