import { domain } from "../constants";

export const apiUrl = (path: string) => {
    return `${domain}/api/${path}`
}