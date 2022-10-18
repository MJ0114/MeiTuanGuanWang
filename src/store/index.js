import {createStore} from 'vuex';

export default createStore({
    actions:{
        stateTrue(context){
            setTimeout(() => {
                context.commit('STATETRUE');
            }, 20);
        },
        stateFalse(context){
            setTimeout(() => {
                context.commit('STATEFALSE');
            }, 20);
        },
        inshow(context){
            setTimeout(() => {
                context.commit('INSHOW');
            }, 1);
        },
        outshow(context){
            
            setTimeout(() => {
                context.commit('OUTSHOW');
            }, 1);
        },
        outmov(context){
            setTimeout(() => {
                context.commit('OUTMOV');
            }, 1);
        },
        outbtn(context){
            setTimeout(() => {
                context.commit('OUTBTN');
            }, 1);
        }
    },
    mutations:{
        STATETRUE(state){
            state.showing = true;
            state.inMenu = true;
        },
        STATEFALSE(state){
            state.showing = false || state.inShow;
            state.inMenu = false;
        },
        INSHOW(state){
            state.inShow = true;
        },
        OUTSHOW(state){
            state.inShow = false;
            state.showing = state.inMenu
        },
        INMOV(state){
            state.inMovie = true;
            state.showBtn = true;
        },
        OUTMOV(state){
            state.showBtn = state.inBtn;
            state.inMovie = false;
        },
        INBTN(state){
            state.inBtn = true;
            state.showBtn = true;
        },
        OUTBTN(state){
            state.inBtn = false;
            state.showBtn = state.inMovie;
        },
        INMYMT(state){
            state.showMyMt = true;
        },
        OUTMTEJCD(state){
            state.showMyMt = false;
        },
        INBSNCTR(state){
            state.showbsnCenter = true;
        },
        OUTBSNCTR(state){
            state.showbsnCenter = false;
        },
        INRULES(state){
            state.showRules = true;
        },
        OUTRULES(state){
            state.showRules = false;
        },
        INWEBNAV(state){
            state.showWebNav = true;
        },
        OUTWEBNAV(state){
            state.showWebNav = false;
        }
    },
    state:{
        inShow:false,
        showing:false,
        inMenu:false,
        inMovie:false,
        inBtn:false,
        showBtn:false,
        showMyMt:false,
        showbsnCenter:false,
        showRules:false,
        showWebNav:false
    },
    getters:{},
    modules:{}
});