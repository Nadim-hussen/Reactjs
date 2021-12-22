export const incNumber = (num) =>{
    return {
        type:"increment",
        payload:num
    }
}
export const decNumber = () =>{
    return {
        type:"decrement"
    }
}
export const mulNumber = (num) =>{
    return {
        type:"multiply",
        payload:num
    }
}
export const divNumber = (num) =>{
    return {
        type:"division",
        payload:num
    }
}