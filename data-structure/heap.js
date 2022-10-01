class Heap {
  constructor() {
    this.data = []
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  swap(idA, idB) {
    const temp = this.data[idA]
    this.data[idA] = this.data[idB]
    this.data[idB] = temp
  }
  push(key) {
    this.data[this.data.length] = key
    this.heapifyUp()
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1

    /* Checking if the current index is greater than the parent index. 
        If it is, it swaps the two. */
    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))

      currentIndex = this.getParentIndex(currentIndex)
    }
  }
  poll() {
    const maxValue = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.length--
    this.heapifyDown()

    return maxValue
  }
  heapifyDown() {
    let currentIndex = 0

    while (this.data[this.getLeftIndex(currentIndex)] !== undefined) {
      let biggestLastIndex = this.getLeftIndex(currentIndex)

      if (
        this.data[this.getRightIndex(currentIndex)] !== undefined &&
        this.data[this.getRightIndex(currentIndex)] >
          this.data[this.getLeftIndex(currentIndex)]
      ) {
        biggestLastIndex = this.getRightIndex(currentIndex)
      }

      if (this.data[currentIndex] < this.data[biggestLastIndex]) {
        this.swap(currentIndex, biggestLastIndex)
        currentIndex = biggestLastIndex
      } else {
        return
      }
    }
  }
}

const heap = new Heap()
console.log("head: ", heap)
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

// console.log("heap: ", heap.data.join(", "))

console.log(heap)
console.log("poll --------------------------------")
let a = []
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())

console.log("Top 5 items: ", a)

console.log("head: ", heap)
