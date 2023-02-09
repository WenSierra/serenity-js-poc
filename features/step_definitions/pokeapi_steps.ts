import { Then, When } from "@cucumber/cucumber";
import { Ensure, equals} from "@serenity-js/assertions";
import { Actor } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";

import { GetAbilitiesPokemon } from '../../src/pokeapi/tasks/GetAbilitiesPokemon';


When('{actor} queries the skills endpoint', (actor: Actor) =>
    actor.attemptsTo(GetAbilitiesPokemon.ofASingleExpression(),
));  
Then('he verify the respons is not null', (actor: Actor) => 
    Ensure.that(LastResponse.body(), equals(null))
);

