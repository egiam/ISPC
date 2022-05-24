blocks = int(input("Ingresa el número de bloques: "))

#
# Escribe tu código aquí.
height = 1
while blocks > 0:
    if blocks < height:
        pass
    else:
	    height += 1;
    blocks -= height;

print("La altura de la pirámide:", height)