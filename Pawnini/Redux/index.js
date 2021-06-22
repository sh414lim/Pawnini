import {createStore} from "redux"

const divToogle=document.querySelector('.toggle');
const counter=document.querySelector('h1');
const btnIncrease=document.querySelector('#increase');
const btnDecrease=document.querySelector('#decrease');

const TOOGLE_SWITCH='TOGGLE_SWITCH';
const INCREASE='INCREASE';
const DECREASE='DECREASE';

const toogleSwitch=()=>({type:TOOGLE_SWITCH});
const increase=difference=>({type:INCREASE.difference});
const decrease=()=>({type:DECREASE});


const initialState={
    toggle:false,
    counter:0
};


function reducer(state=initialState.action){
    switch(atcion.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };

            case INCREASE:
                return{
                    ...state,
                    counter:state.counter+action.difference
                };
                case DECREASE:
                    return{
                        ...state,
                        counter:state.counter - 1 
                    };
                    default:
                    return state;
    }
}

const store=createStore(reducer);


const render=()=>{
    const state=store.getState(); //현재 상태 불러오기
    //토글처리
    if(state.toggle){
        divToogle.classList.add('active');
    }else{
        divToogle.classList.remove('active');
    }

    //카운터 처리
    counter.innerText=state.counter;
};

render();
store.subscribe(render);

divToogle.onClick=()=>{
    store.dispatch(toogleSwitch());
};

btnIncrease.onClick=()=>{
    store.dispatch(increase)
};

btnDecrease.onClick=()=>{
    store.dispatch(decrease());
};