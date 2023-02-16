import { Task } from "@serenity-js/core"
import { DeleteRequest, Send } from "@serenity-js/rest"

export const DeletePost ={
    with: (): Task =>
        Task.where(`#actor requests evaluation of `,
        Send.a(DeleteRequest.to('/posts1')),
    )};
