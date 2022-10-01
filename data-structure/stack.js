class Stack {
  constructor() {
    this.stack = []
    this.count = 0
  }

  push(value) {
    this.stack[this.count] = value
    this.count++
    return this.count - 1
  }

  // Remove last item from stack
  pop() {
    if (this.count === 0) {
      return undefined
    }
    let deleteItem = this.stack[this.count - 1]
    this.stack.pop()
    this.count--
    return deleteItem
  }

  // First item in stack
  peek() {
    if (this.count === 0) {
      return undefined
    }
    let peekItem = this.stack[0]
    this.stack.shift()
    this.count--
    return peekItem
  }

  isEmpty() {
    if (this.count === 0) {
      return console.log("stack empty")
    } else {
      return console.log("stack is not empty")
    }
  }

  getSize() {
    return this.count
  }

  printStack() {
    let str = ""
    for (let i = 0; i < this.count; i++) {
      str += this.stack[i] + " --- "
    }
    console.log(str)
    return str
  }

  clearStack() {
    this.stack = []
    this.count = 0

    return this.stack
  }
}

const st = new Stack()
// st.isEmpty()
st.push(2)
st.push(5)
st.push(7)
// st.isEmpty()

st.push(9)
// st.pop()
// console.log(st.peek())
// console.log(st)
st.printStack()
