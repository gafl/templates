import unittest
from something import Something

# Run with: python something_test.py

class SomethingTest(unittest.TestCase):

    def setUp(self):
        self.something = Something()

    def test_asserts(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('foo'.isupper())
        self.assertEqual('foo'.upper(), 'FOO')
        self.assertNotEqual('foo', 'FOO')

    def test_exception(self):
        with self.assertRaises(SomeException):
            do_something()

if __name__ == '__main__':
    unittest.main()
