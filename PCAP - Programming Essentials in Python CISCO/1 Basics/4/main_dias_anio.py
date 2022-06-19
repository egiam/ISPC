def is_year_leap(year):
    if year % 4 == 0:
        if year % 400 != 0 and year % 100 == 0:
            return False
        return True
    return False
#
# Tu código del LABORATORIO 4.3.1.6.
#

def days_in_month(year, month):
    if month == 2:
        if is_year_leap(year) == True:
            return 29
        else:
            return 28
    if month <= 7:
        if month % 2 != 0:
            return 31
        return 30
    if month % 2 == 0:
        return 31
    return 30
#
# Tu código del LABORATORIO 4.3.1.7.
#

def day_of_year(year, month, day):
    if month == 2:
        if year % 4 == 0:
            if year % 400 != 0 and year % 100 == 0:
                if day > 28:
                    print("Coloco mal los dias")
                    return
            if day > 29:
                print("Coloco mal los dias")
                return
        print("Coloco mal los dias")
        return
    
    if day > days_in_month(year,month):
        print("Coloco mal los dias")
        return
    
    dia_total = 0
    for x in range(1,month+1):
        dia_total+=days_in_month(year,x)
        
    return dia_total
#
# Escribe tu código nuevo aquí.
#

print(day_of_year(2000, 12, 31))
