import math

hat_list = [1, 2, 3, 4, 5]  # Esta es una lista existente de números ocultos en el sombrero.

# Paso 1: escribe una línea de código que solicite al usuario
# reemplazar el número de en medio con un número entero ingresado por el usuario.
numero = int(input("Coloque el numero que ira al medio de la lista: "))
hat_list[round((len(hat_list) - 1)/2)] = numero

print(hat_list)

# Paso 2: escribe aquí una línea de código que elimine el último elemento de la lista.
hat_list.remove(len(hat_list) - 1)

# Paso 3: escribe aquí una línea de código que imprima la longitud de la lista existente.
print("Longitud de la lista: ", len(hat_list))

print(hat_list)
