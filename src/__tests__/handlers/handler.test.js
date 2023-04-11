import { hello } from "../../handlers/handler.js";

describe('Handler', () => {
    it('given event should run handler successfully', async () => {
        const event = "event";
        const context = {};

        const result = await hello(event, context);

        expect(result).toEqual({"event": "event"});
    });
});