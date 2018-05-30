import Cookies from 'js-cookie';
import { get_curUserInfo } from '../../fetchApi/auth';

export default {
    namespaced: true,
    state: { // state
        loading: false,
        auth: null,
        ci_session: null,
    },
    mutations: {
        curUserInfo(state, data) { // 这里的state对应着上面这个state
            state.auth = data;
            state.ci_session = Cookies.get('ci_session')
        },
        loading(state, data) {
            state.loading = data;
        }
    },
    actions: {
        async getCurUserInfo(context) { // 这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('loading', true);
            const userinfo = await get_curUserInfo();
            context.commit('loading', false);
            if (userinfo.status === -17) { // 未登录
                return;
            }
            context.commit('curUserInfo', { auth: userinfo });
        },
    },
}