## Assumptions: All elements of array are unique

def get_perm(inp):
    if len(inp) == 1:
        return inp
    elif len(inp) == 2:
        return [[inp[0], inp[1]], [inp[1],inp[0]]]
    else:
        output = []
        for k in inp:
            temp = inp[:]
            temp.remove(k)
            for out in get_perm(temp):                
                output.append([k] + out)
        return output
    

# number of elemetns as input 
n = int(input("Enter number of elements : ")) 
lst = [] 
# iterating till the range 
for i in range(0, n): 
    ele = int(input()) 
    lst.append(ele) # adding the element 
      
print('input', lst)
o = get_perm(lst)
print('size of output', len(o))
print('output', o)
