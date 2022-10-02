export function getItemFromLocal(key){
    try {
      let temp =JSON.parse(localStorage.getItem(key));
      return temp;  
    } catch (error) {
        return undefined
    }
}

// function for saving the data 
export function saveItemToLocal(key,data) {
    localStorage.setItem(key, JSON.stringify(data));
};

export const removeItemFromLocal = (key) => {
    return localStorage.removeItem(key);
}