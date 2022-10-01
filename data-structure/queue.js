class Queue {
  constructor() {
    this.queue = []
    this.count = 0
  }

  isEmpty() {
    return this.queue.length === 0
  }

  // First visitor comes
  enqueue(value) {
    this.queue.push(value)
    this.count++
    return console.log(this.queue)
  }

  // Choose the first visitor
  peek() {
    if (this.isEmpty()) return null

    return this.queue[0]
  }

  // First visitor goes out
  dequeue(value) {
    if (this.isEmpty()) return null

    const removeHead = this.queue.shift()
    console.log("removeHead: ", removeHead)
    return removeHead
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(5)

console.log(q.dequeue())
