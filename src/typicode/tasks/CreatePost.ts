import { DataTable } from "@cucumber/cucumber";
import { Task } from "@serenity-js/core"
import { PostRequest, Send } from "@serenity-js/rest"

export const CreatePost ={
    with: (body: DataTable): Task =>
        Task.where(`#actor requests evaluation of `,
        Send.a(PostRequest.to('/posts').with( body.rowsHash() )),
    )};

    