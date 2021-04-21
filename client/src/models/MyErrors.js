/**
 *  Model for error handling functions
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