import { base_url } from '../config/config';
import fetch from '../config/fetch';

export function get_curUserInfo() {
    return fetch({
        url: base_url + '/index.php?c=user&m=query_current_user',
        method: 'get'
    });
};
