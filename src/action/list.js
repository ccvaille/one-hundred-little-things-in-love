import axios from 'axios';

const url = 'http://localhost:3636/things'

const actions = {
    get () {
        return axios.get(url);
    },
    add (payload) {
        return axios.post(url, payload);
    },
    remove (payload) {
        return axios.delete(`${url}/${payload.id}`);
    },
    update (payload) {
        return axios.put(url, payload);
    }
}

export default {
    actions
}