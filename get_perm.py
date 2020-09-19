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


inp = [int(input()) for i in range(0, int(input("Enter number of elements : ")))]
print('input', inp)

o = get_perm(inp)
print('size, output', len(o), o)