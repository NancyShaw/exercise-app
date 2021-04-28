/**
 *  Model for error handling functions
 *  
 *  Also putting Empty and null checking function here (for now at least)
 */

import { ToastProgrammatic as toastr } from "buefy";

export function ToastError(msg) {
    toastr.open({
        type: 'is-danger',
        message: msg,
        duration: 20000,
        queue: false
    })
}

export function IsEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

export function IsNullOrEmptyObject(obj) {
    return ( obj === undefined ) || IsEmptyObject(obj);
}