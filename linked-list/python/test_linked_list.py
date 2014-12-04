from linked_list import LinkedList
import unittest

class TestLinkedList(unittest.TestCase):

    def setUp(self):
        pass

    def test_create(self):
        ll = LinkedList()
        assert ll.length() == 0
        assert ll.retrieve(0) == None
        assert ll.remove(0) == None

    def test_add_and_retrieve(self):
        ll = LinkedList()
        ll.add('first')
        assert ll.length() == 1
        assert ll.retrieve(0) == 'first'

        ll.add('second')
        assert ll.length() == 2
        assert ll.retrieve(0) == 'first'
        assert ll.retrieve(1) == 'second'

        ll.add('third')
        assert ll.length() == 3
        assert ll.retrieve(0) == 'first'
        assert ll.retrieve(1) == 'second'
        assert ll.retrieve(2) == 'third'

    def test_remove(self):
        ll = LinkedList()
        ll.add('first')
        ll.add('second')
        ll.add('third')
        ll.add('fourth')
        assert ll.length() == 4
        print ll

        ll.remove(0)
        assert ll.length() == 3
        print ll.retrieve(0)
        assert ll.retrieve(0) == 'second'
        assert ll.retrieve(1) == 'third'
        assert ll.retrieve(2) == 'fourth'
        print ll

        ll.remove(1)
        assert ll.length() == 2
        assert ll.retrieve(0) == 'second'
        assert ll.retrieve(1) == 'fourth'
        print ll


if __name__ == '__main__':
    unittest.main()

