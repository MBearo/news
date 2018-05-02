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
            name:'',
            id:''
        },
        newsList: [],
        newsId: '',
        newsIndex: '',
        category: []
    },
    actions: {
        NewsList_A({
            commit,
            state
        }) {
            console.log(111111)
            axios
                .post(
                    urls.urls + "Graduation/ReadData",
                    qs.stringify({
                        batch: true,
                        object: 'news',
                        ascOrDesc: 'DESC',
                        orderBy: 'Id',

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
        CategoryAction({
            commit,
            state
        }) {
            axios
                .post(
                    urls.urls + "Graduation/ReadData",
                    qs.stringify({
                        batch: true,
                        object: 'category'
                    })
                )
                .then(result => {
                    commit('Category_M', {
                        result
                    });
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        CommentAction({
            commit,
            state
        }, { id }) {
            axios
                .get(urls.url2+"index.php", {
                    params: {
                        id
                    }
                })
                .then(result => {
                    console.log(id)
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
            result.data.data.list.forEach(({ Id, Title, Content, ReadTime, Category, PublishDate, ImgUrl, Author }) => {
                state.newsList.push({ id: Id, title: Title, time: PublishDate, content: Content, img: ImgUrl, author: Author, category: Category, hidden: true })
            });
        },
        ChangeNewsId(state, {
            id, indexs
        }) {
            state.newsId = id
            state.newsIndex = indexs
        },
        SelectFenLei_M(state, {
            index
        }) {
            if (index == 0) {
                state.newsList.forEach(value => {
                    value.hidden = true
                })
            } else {
                state.newsList.forEach(value => {
                    if (value.category == state.category[index].Id) {
                        value.hidden = true
                    } else {
                        value.hidden = false
                    }
                })
            } ``
        },
        Category_M(state, {
            result
        }) {
            state.category = result.data.data.list;
            state.category.unshift({ Id: 'all', Name: '全部' })
        },
    },
    getters: {},
    modules: {}
})

