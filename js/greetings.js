const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");


//반복되는 string은 대문자 변수로 저장해놓는 것이 좋음, 실수 발생이 적어짐
const HIDDEN_CLASSNAME="hidden";//string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함(대문자로 하는 경우)
const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault -> 브라우저가 기본 동작을 실행하지 못하게 막아주는 것
    //새로고침이 안됨
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText="Hello "+username; 아래와 같음
    paintGreetings(username);
}

function paintGreetings(username){//greeting에 텍스트를 추가 후 hideen class명을 지워주는 함수
    greeting.innerText=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);//submit 이벤트 감지


const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
    
}