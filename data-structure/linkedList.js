class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size += 1
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data)
    let current

    // If empty, make head
    if (!this.head) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }
  // Remove at index
  removeAt(index) {
    let current = this.head
    let previous
    let count = 0

    // Remove first element
    if (index === 0) {
      this.head = current.next
    } else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.size--
  }
  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return
    }

    if (index === 0) {
      //   this.insertFirst(data)
      this.head = new Node(data, this.head)
      return
    }

    const node = new Node(data, this.head)
    let current = this.head
    let previous
    let count = 0

    while (count < index) {
      previous = current
      count++
      current = current.next
    }

    node.next = current
    previous.next = node

    this.size++
  }

  // Get at index
  getAt(index) {
    let current = this.head
    let count = 0

    while (current) {
      if (count === index) {
        console.log(current.data)
      }
      count++
      current = current.next
    }

    return null
  }
  // Clear List
  clearList() {
    this.head = null
    this.size = 0
  }
  // Print List data
  printListData() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

// const n1 = new Node(100)
// console.log(n1)

const ll = new LinkedList()
ll.insertFirst(4)
ll.insertFirst(3)
ll.insertFirst(2)
ll.insertFirst(1)
ll.removeAt(2)
// ll.insertFirst(333)
// ll.insertLast(444)

// ll.insertAt(5, 4)

// ll.getAt(5)
// ll.removeAt(4)
// ll.clearList()
// console.log("*****")

ll.printListData()
// console.log(JSON.stringify(ll, null, 2))

// ****************************************************************
class LinkedListRepeat {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size += 1
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    let node = new Node(data, this.head)
    let current = this.head
    let count = 0
    let previous

    while (count < index) {
      previous = current
      count++
      current = current.next
    }

    node.next = current
    previous.next = node

    this.size++
  }

  insertLast(data) {
    let node = new Node(data)
    let current

    if (!this.head) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }

  printListData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

// const llR = new LinkedListRepeat()
// llR.insertFirst(100)
// llR.insertFirst(200)
// llR.insertLast(3)
// llR.insertAt(25, 2)
// // console.log(JSON.stringify(llR, null, 2))
// llR.printListData()
