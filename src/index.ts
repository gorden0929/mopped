export function removeUndefined(value: any): any {
  if (isObject(value)) {
    return removeUndefinedObject(value);
  } else if (Array.isArray(value)) {
    return removeUndefinedArray(value);
  } else if (value !== undefined) {
    return value;
  }
}

function removeUndefinedObject(value: any): any {
  const tempObj: any = {};
  Object.keys(value).forEach(key => {
    let newVal: any;
    if (Array.isArray(value[key])) {
      newVal = removeUndefinedArray(value[key]);
    } else if (isObject(value[key])) {
      newVal = removeUndefinedObject(value[key]);
    } else if (typeof value[key] !== 'undefined') {
      newVal = value[key];
    }
    if (newVal) {
      Object.assign(tempObj, { [key]: newVal });
    }
  });

  return Object.keys(tempObj).length === 0 ? undefined : tempObj;
}

function removeUndefinedArray(value: any[]): any[] {
  const tempArr: any[] = [];
  value.forEach(v => {
    if (isObject(v)) {
      const newObj = removeUndefinedObject(v);
      if (newObj) {
        tempArr.push(newObj);
      }
    } else if (typeof v !== 'undefined') {
      tempArr.push(v);
    }
  });
  return tempArr;
}

function isObject(val: any): boolean {
  return val instanceof Object && val.constructor === Object;
}
