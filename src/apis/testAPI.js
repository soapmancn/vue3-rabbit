import httpInstance from "@/utils/http";

export function getList(){
    return httpInstance({
        url: '/person/list'
    })
}