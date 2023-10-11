# Because of we are using a sequential list (array) to represent the stack, PUSH is synonymous with append for an array so there is no need to create an operation for it. As for POP, python recongizes the mainuplation so no operation is needed for that either.
# 
open_list = ["[","{","("]
close_list = ["]","}",")"]
# Function to check parentheses
def check(myStr):
    stack = []
    for i in myStr:
        if i in open_list:
            stack.append(i)
        elif i in close_list:
            pos = close_list.index(i)
            if ((len(stack) > 0) and
                (open_list[pos] == stack[len(stack)-1])):
                stack.pop()
            else:
                return "Unbalanced"
    if len(stack) == 0:
        return "Balanced"
    else:
        return "Unbalanced"
# EXAMPLES
string = "{[]{()}}"
print(string,"-", check(string))
string = "[{}{})(]"
print(string,"-", check(string))
string = "((()"
print(string,"-",check(string))