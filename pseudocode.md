# Pseudocode? More like Python! #

```python
from typing import Dict, List

def format(key: str, value: str, pretty: bool, debug: bool) -> str:
    if pretty:
        return f"  {key.replace("_", "-")}: {value.replace("_", "-")};\n"
    else:
        return f"{key.replace("_", "-")}:{value.replace("_", "-")};"


def formatProperties(properties: Dict, pretty: bool, debug: bool, history: List = []) -> str:
    newValues = ""
    newKey = ""

    for i in history:
        newKey += f"{i} "
    
    for key, value in properties:
        newValues += format(key, value, pretty, debug)
    
    if pretty:
        return f"{newKey}:{{\n{newValues}}}\n\n"
    else:
        return f"{newKey}:{{{newValues}}}"


def parseJsonss(styles: Dict, pretty: bool, debug: bool, history: List = []) -> str:
    output = ""

    for key, value in styles:
        properties = {}
        objects = {}

        history.append(key)

        for key2, value2 in value:
            if type(value2) is str:
                properties[key2] = value2
            elif type(value2) is dict:
                objects[key2] = value2
            else:
                raise Error
        
        if len(properties) > 0:
            output += formatProperties(properties, pretty, debug, history)
        
        if len(objects) > 0:
            output += parseJsonss(objects, pretty, debug, history)
        
        if len(history) > 0:
            del history[-1]
        
    return output
```