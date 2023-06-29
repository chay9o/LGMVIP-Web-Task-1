import { h, text, app } from "https://esm.run/hyperapp"

const AddTodo = (state) => ({
  ...state,
  value: "",
  todos: state.todos.concat(state.value)
})

const NewValue = (state, event) => ({
  ...state,
  value: event.target.value,
})

app({
  init: { todos: ["LetsGrowMore"], value: "add" },
  view: ({ todos, value }) =>
    h("main", {}, [
      h("h1", {}, text("LGM-VIP-TASK1-To-do list 📝")),
      h("ul", {},
        todos.map((todo) => h("li", {}, text(todo)))
      ),
      h("section", {}, [
        h("input", { type: "text", oninput: NewValue, value }),
        h("button", { onclick: AddTodo }, text("Add new")),        
      ])
    ]),
  node: document.getElementById("app"),
})
