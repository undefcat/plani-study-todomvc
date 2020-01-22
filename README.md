# plani-study-todomvc

발표일: 2020-01-23 수요일

## CSS

- [todomvc-app-css](https://github.com/tastejs/todomvc-app-css)

## Template

- [todomvc-template](https://github.com/tastejs/todomvc-app-template/blob/master/index.html)

## 추가적인 내용

1. 이벤트 버스를 이용하여 컴포넌트간에 통신을 할 때, `$on`은 `mounted`보다 `created`에서 하는게 맞습니다.

2. 스터디 할 때에 빠뜨린게 있는데, TODO내용을 더블클릭하면 수정할 수 있는 기능이 있습니다. 이 기능을 추가하였습니다.

3. 마찬가지로 All, Active, Completed에 따른 버튼 상태도 구현하였습니다. `TodoFilterItem`에서 이벤트를 `$emit`하고 자기 자신으로부터 다시 `$on`하는 것을 눈여겨보세요. 왜 이렇게 구현했는지도 한 번 생각해보시면 도움이 될 것 같습니다.
