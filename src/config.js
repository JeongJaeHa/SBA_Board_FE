const BASE_URL = `http://127.0.0.1:8080`

export const API = {
    SIGN_IN: `${BASE_URL}/auth/login`,
    SIGN_UP: `${BASE_URL}/auth/register`,
    POST_WRITE: `${BASE_URL}/post/register`,
    POST_EDIT: `${BASE_URL}/post/update?id=`,
    POST_LIST: `${BASE_URL}/post/list`,
    POST_DETAIL: `${BASE_URL}/post?id=`,
    POST_DELETE: `${BASE_URL}/post/delete?id=`
}