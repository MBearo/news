import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import urls from './urls'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: '',
        user: {
            img: 'http://img2.cache.netease.com/game/img17/blizzard/img/new_icon_7.png',
            desc: '',
            id: 102,
            male: '',
            name: "u_nQVQUZ0rzE9t",
            nick: '',
            tag: []
        },
        newsList: [],
        newsId:'',
        newsIndex:''
    },
    actions: {
        NewsList_A({
            commit,
            state
        }) {
            axios
                .post(
                    urls.urls + "Graduation/ReadData",
                    qs.stringify({
                        batch: true,
                        object: 'news'
                    })
                )
                .then(result => {
                    commit('NewsList_M', {
                        result
                    });
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    mutations: {
        Scroll_M(state, {
            result
        }) {
            state.scrollY = result
        },
        User_M(state, {
            result
        }) {
            state.token = result;
        },
        NewsList_M(state, {
            result
        }) {
            // state.newsList = result.data.data.list;
            result.data.data.list.forEach(({ Id, Title, Content, ReadTime, Category, PublishDate }) => {
                state.newsList.push({ id:Id,title: Title,time:PublishDate ,content:Content})
            });
        },
        ChangeNewsId(state, {
            id,indexs
        }) {
           state.newsId=id
           state.newsIndex=indexs
        },
    },
    getters: {},
    modules: {}
})

