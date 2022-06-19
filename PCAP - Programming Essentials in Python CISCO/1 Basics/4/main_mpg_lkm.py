milla = 1609.344
galon = 3.785411784

def liters_100km_to_miles_gallon(liters):
    galones = liters/galon
    millas = 100000/milla
    return millas/galones
#
# Escribe tu código aquí.
#

def miles_gallon_to_liters_100km(miles):
    kilometros = miles * milla / 1000
    return galon/kilometros*100
#
# Escribe tu código aquí.
#

print(liters_100km_to_miles_gallon(3.9))
print(liters_100km_to_miles_gallon(7.5))
print(liters_100km_to_miles_gallon(10.))
print(miles_gallon_to_liters_100km(60.3))
print(miles_gallon_to_liters_100km(31.4))
print(miles_gallon_to_liters_100km(23.5))
