word_without_vowels = ""
user_word = input("Ingrese la palabra: ").upper()
vocales = ["A", "E", "I", "O", "U"]

# Indicar al usuario que ingrese una palabra
# y asignarla a la variable user_word.


for letter in user_word:
   # Completa el cuerpo del bucle.
   if letter in vocales:
       continue
   else:
       word_without_vowels += letter
       
print(word_without_vowels)

# Imprimir la palabra asignada a word_without_vowels.
