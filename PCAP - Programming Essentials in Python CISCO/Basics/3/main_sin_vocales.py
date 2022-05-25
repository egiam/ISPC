# Declaracion de la variable palabras sin vocales
word_without_vowels = ""

# Declaramos user_word, donde el usuario va a ingresar la palabra, despues va a almacenar toda esa palabra con mayusculas (.upper())
user_word = input("Ingrese la palabra: ").upper()

# Declaracion de una lista, con todas las vocales en mayuscula
vocales = ["A", "E", "I", "O", "U"]

# Indicar al usuario que ingrese una palabra
# y asignarla a la variable user_word.


# Por cada letra que existe en la palabra definida anteriormente.
for letter in user_word:

   # Si la letra se encuentra dentro de la lista vocales --> continuar (saltear a la siguiente palabra en vocales)
   if letter in vocales:
       continue
   else: # Else --> agregarle la letra a la variable de palabras sin vocales
       word_without_vowels += letter

# Escribir en la consola la palabra sin vocales
print(word_without_vowels)

# Imprimir la palabra asignada a word_without_vowels.
