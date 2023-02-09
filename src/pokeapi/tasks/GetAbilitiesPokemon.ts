import { Task } from "@serenity-js/core"
import { GetRequest, Send } from "@serenity-js/rest"

export const GetAbilitiesPokemon ={
    ofASingleExpression: (): Task =>
        Task.where(`#actor requests evaluation of `,
            Send.a(GetRequest.to("/api/v2/pokemon/ditto"))
    )};
