# Python

## Python Basics
- Modulo: %
- Exponentiation: **
- float(mystring)
- str(myfloat)
- mystring.upper()
- boolean operators: and or not
- condition: if True: else:

## List
- mylist = [0,1,2,3]
- mylist2 = mylist + ["blabla", 24.5] # concat
- list(mylist) # create a copy
- sorted(mylist, reverse=True)
- del(mylist[3:5])
- mylist.index(value)
- mylist.count(value) # count how - - often value appears in mylist
- mylist.append(value)
- mylist.reverse()

## Packages
- import math
- from math import radians
- import numpy as np

## Numpy
- import numpy as np
- mynparray = np.array(mylist)
- mynparray.shape
- type(mynparray)
- np.mean(mynparray)
- np.median(mynparray))
- np.std(mynparray) # standard deviation
- mynparray[mynparray[0] == 'GK']
- np.max(mylist)
- np.corrcoef(mylist,mylist2)
- np.absolute(mylist)
- np.logical_and(mylist, mylist2)
- np.column_stack((mylist,mylist2))

## Plotting with Matplotlib
- import matplotlib.pyplot as plt
- plt.xlabel(xlab)
- plt.ylabel(ylab)
- plt.title(title)
- plt.xticks(tick_val, tick_lab, rotation='vertical') # tick_val = [1000,10000,100000] tick_lab = ['1k','10k','100k']
- plt.yticks(tick_val, tick_lab)
- plt.plot(x,y)
- plt.scatter(x,y, s=point_size, c= col, alpha= 0.8)
- plt.scatter(unemployment_rate, low_wage_jobs, marker='^' , color='r')
- plt.xscale('log') # Put the x-axis on a logarithmic scale
- plt.hist(x, bins=5)
- plt.text(x, y, label) # requires plt.grid(True) after
- plt.grid(True)
- plt.show()
- plt.clf() # clean up plot

## Pandas
- import pandas as pd
- df = pd.read_csv("cars.csv")
- df = pd.read_csv('cars.csv', index_col = 0)
- df["mycolumnname"] # Returns a serie
- df[["country"]] # Returns a dataframe
- df.loc[myindex1]
- df.loc[[myindex1, myindex2]]
- df.loc[myindex1,mycolumn1] # returns a value
- df.loc[['RU', 'MOR'],['country','drives_right']] # Print sub-DataFrame
- df.dtypes # Print .dtypes
- df.describe() # Output statistics
- df.describe(exclude=['object']) # Exclude data of type object
- df["median"].unique()
- df.loc[recent_grads[myColumnName] == myOldValue, myColumnName] = myNewValue
- df[myNewColumnName] = df[myColumnName1] / df[myColumnName2]
- df.loc[df[myColumnName] == myValue]
- df.nsmallest(5,myColumnName) # Find the 5 lowest rows
- df.groupby(['myColumnName']).myColumnName.count()
- df.groupby(['myColumnName'])['myColumnName1', 'myColumnName2'].mean()
- df.groupby(['myColumnName']).myColumnName1.sum()
- df.dropna(axis=0, inplace=True) # Drop all rows with a missing value
- df['myColumnName'] = pd.to_numeric(df['myColumnName'])

## Panda and Plot
- df.plot(kind='scatter', x='unemployment_rate', y='low_wage_jobs') # Followed per plt.show() # Plot scatter chart
- df.plot(kind='bar') # Plot bar chart
- df.plot(subplots=True) # Plot with subplots
