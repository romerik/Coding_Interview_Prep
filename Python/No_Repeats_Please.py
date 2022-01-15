#coding:utf-8

def hasNotRepeat(string):
    if len(string) <=1:
        return True
    else:
        for char in set(string):
            index = string.find(char)
            if index!=-1 and index!=len(string)-1:
                if string[index]==string[index+1]:
                    return False
        return True

def findPermutations(string):
    if len(string) < 2:
        return string
    
    permutationsArray = [] 

    for index,char in enumerate(string):
        remainingChars = string[0:index] + string[index+1:]

        for permutation in findPermutations(remainingChars):
            if hasNotRepeat(char+permutation):
                permutationsArray.append(char+permutation)

    return permutationsArray


def permAlone(string):
    return len(findPermutations(string))

if __name__ == '__main__':

    print(permAlone("aab"))
    