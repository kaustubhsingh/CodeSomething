

class LinkedListNode:
	
	def __init__(self, value, next_node = None):
		self.value = value
		self.next  = next_node
		
		
def BuildLinkList():
	node1 = LinkedListNode(2)
	node2 = LinkedListNode(3, node1)
	node3 = LinkedListNode(4, node2)
	PrintList(node3)
	
def PrintList(head):
	print (head.value)
	
	if (head.next == None):
		return
	else:
		return PrintList(head.next)
		

BuildLinkList()			
		
	


	
