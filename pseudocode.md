1.  Split objects and props
```python
def parsejsonss(styles: Dict, history: List = []):
    for key, value in styles:
        properties = {}
        objects = {}
        
        if len(history) > 0:
            del history[-1]
        history.append(key)

        if type(value) is str:
            properties[key] = value
        elif type(value) is object:
            properties[key] = value
        else:
            raise f"cannot have type {type(value)} in object"
```

2.  parse properties
```python
def parseProps(properties: Dict, history: List):
    output = ""
    newKey = ""

    for i in history:
        newKey += f"{i} "

    for key2, value2 in properties:
        output += f"{NewKey} {key2}: {value2};"

    return output
```

3.  parse objects
```python
return parsejsonss(objects)
```