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
    let newNode = new this.Node({element, next:this._head(), prev: this._sentinel});
    this._head().prev = newNode;
    this._sentinel.next = newNode;
    this.nodeCount ++ ;
    return newNode;

  }

  insertTail(element) {
    let newNode = new this.Node({element, next: this._sentinel, prev: this._tail});
    this._tail().next = newNode;
    this._sentinel.prev = newNode;
    this.nodeCount ++ ;
    return newNode;
  }

  removeHead() {
    this.nodeCount --;
    return this._head().remove();
  }

  removeTail() {
    this.nodeCount --;
    return this._tail().remove()
  }

  remove(node) {
    if (node.remove){
      this.nodeCount --;
    return this.node.remove();
    }
  }

  forEach(callback) {
    // start from head node and iterate until we hit the sentinel node
    // callback is some function provided by the client that needs to be implemented to each node
    let j = 0;
    let node = this._head();
    while (node !== this._sentinel){
      callback(node.element);
      j ++;
      node = node.next;
    }
  }

  count() {
    return this.nodeCount
  }
}

export default DoublyLinkedList;