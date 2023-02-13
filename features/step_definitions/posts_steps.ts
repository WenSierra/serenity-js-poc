import { DataTable, Then, When } from "@cucumber/cucumber";
import { Ensure, equals} from "@serenity-js/assertions";
import { Actor } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { CreatePost} from '../../src/typicode/tasks/CreatePost';
import { GetsPosts} from '../../src/typicode/tasks/GetsPosts';


When('{actor} wants to create a new post with', (actor: Actor, body: DataTable) =>
    actor.attemptsTo(CreatePost.with(body))
);

Then('he validates that it was created correctly', () =>
    Ensure.that(LastResponse.status(), equals(201))
);

When('{actor} wants to consult the posts',  (actor: Actor)  =>
    actor.attemptsTo(GetsPosts.with())

    );

Then('he validates that it was consulted correctly',  ()  =>
    Ensure.that(LastResponse.status(), equals(200))
);


