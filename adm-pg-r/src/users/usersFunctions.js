export const addUser = (array, callback, newUser) => {
    callback([...array, {...newUser, id: array[array.length - 1].id + 1 || array.indexOf(array[array.length-1] + 1)}])
}
export const removeUser = (array, callback, user) => {
    console.log(callback);
    callback(array.filter(value => value.id !== user.id));
}