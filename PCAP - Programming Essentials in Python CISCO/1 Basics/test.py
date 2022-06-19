# my_list = [3, 1, -2]
# print(my_list[my_list[-1]])

y = 2 + 3 * 5.
print(y)

x = 2
y = 4

x = x // y
y = y // x

print(y)

print(1//2*3)

vals=[0,1,2]
vals.insert(0,1)
del vals[1]
print(vals)

my_list = [i for i in range(-1,2)]
print(my_list)

x = 1
x = x == x
print(x)

z=10
y=0
x=y<z and z>y or y>z and z<y
print(x)

var=1
while var<10:
    print("#")
    var=var <<1

my_list=[1,2,3]
for v in range(len(my_list)):
    my_list.insert(1,my_list[v])
print(my_list)

a=1
b=0
c=a&b
d=a | b
e=a^b
print(c+d+e)


for i in range(1):
    print("#")
else:
    print("#")

vals=[0,1,2]
print(vals)
vals[0],vals[2] = vals[2],vals[0]
print(vals)

my_list_1=[1,2,3]
my_list_2=[]
for v in my_list_1:
    my_list_2.insert(0,v)
print(my_list_2)

my_list=[1,2,3,4]
print(my_list[-3:-2])

t=[[3-1 for i in range(3)]for j in range(3)]
s =0
for i in range(3):
    s+=t[1][1]
print(s)

# my_list[[0,1,2,3] for i in range(2)]
# print(my_list[2][0])

var=0
while var<6:
    var+=1
    if var % 2==0:
        continue
    print("#")

i=0
while i<=5:
    i+=1
    if i % 2==0:
         break
    print("*")