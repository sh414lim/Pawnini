//자바스크립트 파일 상단에 수정할 DOM 노드를 가리키는 값을 미리 선언해준다
import {createStore} from "redux";

const divToggle=document.querySelector('.toogle');
const counter=document.querySelector('h1');
const btnIncrease=document.querySelector('#increase');
const btnDecrease=document.querySelector('#decrease')


//액션타입과 액션 생성함수 정의
//프로젝트의 상태에 변화를 일으키는것을 액션이라고 한다
//액션에 이름을 정의
//액션 이름은 문자열 형태로 주로 대문자로 작성하며 액션이름은 고유해야한다

const TOOGGLE_SWITCH='TOOGGLE_SWITCH';
const INCREASE='INCREASE';
const DECREASE='DECREASE';



//이 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수르 작성해준다.
//액션 객체는 type 값을 반드시 갖고 있어야 하며 그외에 추후 상태를 업데이트 할때 참고하고 싶은 값은 마음대로 넣는다


const toogleSwitch=()=>({type:TOOGLE_SWITCH});
const increase=difference=>({type:INCREASE,difference});
const decrease=()=>({type:"DECREASE"});


//초깃값을 설정한다
//초깃값의 형태는 자유다

const initialState={
    toogle:false,
    counter:0
}

//리듀서 함수 정의
//리듀서는 변화를 일으키는 함수이다
//함수의 파라미터는 state와 action 값을 받아온다

//state가 undefined 일 때는 initalState를 기본값으로 사용
function reducer(state=initialState, action){
    //action.type에 따라 다른 작업을 처리함
    switch(action.type){
        case TOOGGLE_SWITCH:
            return{
                ...state, //불변성 유지
                toggle:!state.toogle
            };
            case DECREASE:
                return{
                    ...state,
                    counter:state.counter -1
                };
                default:
                    return state;
    }
}

//리듀서 함수가 맨 처음 호출 될때는 state값이 undefined 이다
//해당 값이 undefined 로 주어졌을때는 initialState를 기본값으로 설정하기위 해 함수의 파라미터 쪽에 기본값 설정

//리듀서에서는 상태의 불변성을 유지하면서 데이터의 변화를 일으켜 주어야한다
//불변성을 유지하는 작업을 할때는  ... spread 연산자를 사용하면 편하다
//단 객체의 구조가 복장해지면 spreed 연산자로 불변성을 관리하며 업데이트 하는것이 굉장히
//번거로울 수 있다

//객체의 구조가 복잡해지거나 배열도 함께 다루는 경우 immer 라이브러리를 사용하면 좀 더 쉽게
//리듀서를 작성할 수 있다


//store를 만들때는 cerateStore 함수를 사용한다

const store=createStore(reducer);

//스토어 생성후 스토어 내장함수 생성

//render 함수 생성
//render 함수는 상태가 업데이트 될 때 마다 호출되며 리액트의 render 함수와는 다르게 html 을 사용하여 만들어진 UI 의 속성을 상태에 따라 변경헤준다

const render=()=>{
    const state=store.getState(); //현재 상태를 불러온다
    //토글처리
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('actiov');
    }
    //카운터 처리
    counter.innerText=state.counterl
};

render();