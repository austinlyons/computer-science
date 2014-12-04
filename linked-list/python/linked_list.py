class LinkedList:
    def __init__(self):
        self._head = {}
        self._length = 0

    def length(self):
        return self._length

    def add(self, data):
        current = {}
        node = {
            'data': data,
            'next': {}
        }

        if not self._head:
            self._head = node
        else:
            current = self._head
            while 'next' in current and current['next']:
                current = current['next']
            current['next'] = node
        self._length += 1


    def retrieve(self, index):
        if self.invalid_index(index):
            return None

        current = self._head
        i = 0

        while (i < index):
            current = current['next']
            i += 1

        return current['data']

    def remove(self, index):
        if self.invalid_index(index):
            return None

        current = self._head
        previous = None
        i = 0

        if index == 0:
            self._head = current['next']
        else:
            while (i < index):
                previous = current
                current = current['next']
                i+=1
            previous['next'] = current['next']

        self._length -= 1

        return current['data']

    def push(self, data):
        """
        stack-like push: add to head
        """
        node = {
            'data': data,
            'next': {}
        }
        temp = self._head
        self._head = node;
        self._head['next'] = temp
        self._length += 1

        return self._length

    def pop(self):
        """
        stack-like pop: remove from head
        """
        return self.remove(0)

    def enqueue(self):
        pass

    def dequeue(self):
        pass

    def __repr__(self):
        current = self._head
        i = 0
        output = ""

        while i < self._length:
            output += current['data'] + '->'
            current = current['next']
            i += 1

        return output[:-2] if i else output

    def invalid_index(self, index):
        return index < 0 or index >= self._length

if __name__ == '__main__':
    ll = LinkedList()
    ll.add('first')
    ll.add('second')
    ll.add('third')
    print ll

