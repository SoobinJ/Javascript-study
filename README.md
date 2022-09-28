# Javascript-study - javascript 학습

### 노마드 코더 바닐라 JS로 크롬 앱 만들기 강의

## Login ex

- 로그인을 하면 로그인폼이 보이지 않게 함
- localStorage -> 유저 정보를 저장
- localStorage에 username이 존재하는 경우 로그인폼을 안 보이게 함
- localStorage에 username이 존재하지 않는 경우 로그인폼이 보이게 함
- 강의 정리 노트 https://www.notion.so/Login-be7c87c9e9ea4cd7a7054b204192a574

## Clock ex

- Date 객체의 매서드를 활용하여 시계 표현
- 2자리 숫자 표기 방식
- 강의 정리 노트 https://www.notion.so/Clock-d74310073d7d4f0bad827470d07fe8f0

## Quotes ex

- math module
- 배열에 저장된 명언을 랜덤으로 보여주기
- 강의 정리 노트 https://www.notion.so/Quotes-28776fbd476b48e58dd92db40ffd05e8

## Background ex

- math module
- 자바스크립트로 요소 추가하기
  - createElement() -> 요소를 만듦
  - appendChild() -> 선택한 요소 안에 자식요소를 추가함
- 강의 정리 노트 https://www.notion.so/Background-98afa5ea75614cbb8fcb7213f9e173c2

## ToDo ex

- todo를 작성 -> 자바스크립트로 요소 추가하기
  - todo와 함께 ❌버튼 생성 -> 클릭 시 todo를 삭제
  - localStorage에 저장
    - 저장 시 id값과 함께 배열 형태로 저장 => 랜덤한 값의 id 부여
    - Date.now() : 밀리초를 주는 함수 => id값에 활용
    - localStorage에는 오직 텍스트만 저장할 수 있음
    - JSON.stringify() : 어떤 것이든 string으로 바꿔줌 => array 형태로 저장
- 삭제 버튼
  - 클릭이벤트의 경우 클릭을 인지할 수는 있지만 어떤 것이 클릭되었는지 알 수 없음
    - target : 클릭된 html elemment임 => 이를 활용함
  - 삭제 버튼을 클릭해도 화면에서는 지워지지만 localStorage에는 남아있는 문제
    - filter함수 활용
    - filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환함
    - 각 요소를 시험할 함수가 true를 반환하면 요소를 유지하고, false를 반환하면 버림
- 강의 정리 노트 https://www.notion.so/TO-Do-List-5cd40f7dacdc4c6385534ec00871ee8a
