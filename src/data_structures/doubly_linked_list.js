class DLLNode {
  constructor({ element = undefined, next = this, prev = this, isSentinel = false }) {
    this.element = element;
    this.next = next;
    this.prev = prev;
    this._active = !isSentinel;
  }

  remove() {
    if (this._active) {
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this._active = false;
      return this.element;
    }
  }
}

class DoublyLinkedList {
  constructor(Node = DLLNode) {
    this.Node = Node;
    this._sentinel = new this.Node({ isSentinel: true });
    this.nodeCount = 0;
  }

  _head() {
    return this._sentinel.next;
  }

  _tail() {
    return this._sentinel.prev;
  }

  insertHead(element) {
    let newNode = new this.Node(element);
    this._head().next = newNode;
    this._sentinel.prev = newNode;
    this.nodeCount ++ ;
    return ;

  }

  insertTail(element) {
    let newNode = new this.Node(element);
    this._tail().next = newNode;
    this._sentinel.next = newNode;
    this.nodeCount ++ ;
    return newNode;
  }

  removeHead() {
    this.nodeCount -- ;
    return this._head().remove()
  }

  removeTail() {
    this.nodeCount -- ;
    return this._tail().remove()
  }

  remove(node) {
    this.nodeCount --;
    return this.node.remove();
  }

  forEach(callback) {
  }

  count() {
    return this.nodeCount
  }
}

export default DoublyLinkedList;