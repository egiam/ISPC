def is_year_leap(year):
    if year % 4 == 0:
        if year % 400 != 0 and year % 100 == 0:
            return False
        return True
    return False
#
# Tu código del LABORATORIO 4.3.6.
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
# Escribe tu código aquí.
#

test_years = [1900, 2000, 2016, 1987]
test_months = [2, 2, 1, 11]
test_results = [28, 29, 31, 30]
for i in range(len(test_years)):
	yr = test_years[i]
	mo = test_months[i]
	print(yr, mo, "->", end="")
	result = days_in_month(yr, mo)
	if result == test_results[i]:
		print("OK")
	else:
		print("Fallido")
