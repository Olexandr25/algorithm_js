class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

class DoublyLinkedList {
  constructor() {
    /** @var DoublyLinkedListNode */
    this.head = null

    /** @var DoublyLinkedListNode */
    this.tail = null
  }
}

const ll = new DoublyLinkedListNode(10)
