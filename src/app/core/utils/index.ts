export const deepCopy = object => {
  const copyObject: any = {};
  Object.keys(object).forEach(key => {
    if (object[key] === 'object' && object.hasOwnProperty(object[key])) this.deepCopy(object[key]);
    else {
      copyObject[key] = object[key];
    }
  });
  return copyObject;
};
