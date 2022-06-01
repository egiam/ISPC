def is_prime(num):
    if num == 2:
        return True
    for x in range(2,num):
        if num % x == 0:
            return False
    return True
#
# Escribe tu código aquí.
#

for i in range(1, 20):
	if is_prime(i + 1):
			print(i + 1, end=" ")
print()
