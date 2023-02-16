import { Task } from "@serenity-js/core"
import { GetRequest, Send } from "@serenity-js/rest"

export const GetsPosts ={
    with: (): Task =>
        Task.where(`#actor requests evaluation of `,
        Send.a(GetRequest.to("/posts")),
    )};
