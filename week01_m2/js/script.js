document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo");
  const todoList = document.querySelector(".box_todos:nth-child(1)");
  const completedList = document.querySelector(".box_todos:nth-child(2)");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 이벤트 제거

    const todoText = todoInput.value.trim(); // 입력 값 가져오기

    if (todoText !== "") {
      // 입력 값이 비어 있지 않은 경우
      addTodoItem(todoText); // Todo 아이템 추가
      todoInput.value = ""; // 입력창 비우기
    }
  });

  // todo - 생성
  function addTodoItem(todoText) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("box_todo");
    todoItem.innerHTML = `
        <h4>${todoText}</h4>
        <button class="button_todo">완료</button>
      `;
    todoList.appendChild(todoItem);

    // todo 이동
    const completeButton = todoItem.querySelector(".button_todo");
    completeButton.addEventListener("click", function () {
      moveTodoItem(todoItem);
    });
  }

  // todo - 삭제
  function moveTodoItem(todoItem) {
    const todoText = todoItem.querySelector("h4").innerText;

    // todo 생성
    const completedItem = document.createElement("div");
    completedItem.classList.add("box_todo");
    completedItem.innerHTML = `
        <h4>${todoText}</h4>
        <button class="button_todo">삭제</button>
      `;
    completedList.appendChild(completedItem);

    // todo 삭제
    const deleteButton = completedItem.querySelector(".button_todo");
    deleteButton.addEventListener("click", function () {
      completedItem.remove();
    });

    todoItem.remove(); // todo 초기화
  }
});
