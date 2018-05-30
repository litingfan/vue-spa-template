function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function checkResult(result) {
    if (result.status === 0) {
        return result;
    }
    const error = new Error();
    error.response = result;
    throw error;
}

function xFetch (params) {
    const url = params.url;
    const method = params.method;
    const body = params.body || null;
    const headers = new Headers({
        'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      });

    return fetch(url, { 
            method,
            body,
            credentials: 'include',
            headers,
        }).then(checkStatus)
        .then(parseJSON)
        .then(checkResult)
        .then((res) => (res))
        .catch((err) => {
            return err.response;
        });
}
export default xFetch;