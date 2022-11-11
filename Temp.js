import { Selector } from "testcafe";

fixture`Navigate to an App`
    .disablePageReloads
    .page(`https://planet9dev.neptune-software.com`)

test(`TC-03-1001-022: Sample Test`, async t => {
    try {
        await t
            .typeText(Selector('input#inLoginName-inner'), 'testcafe', { paste: true })
            .typeText(Selector('input#inLoginPassword-inner'), 'testcafePassword', { paste: true })
            .click(Selector('button#butLoginx'));

        t.ctx.passed = true;
    } catch (err) {
        throw err;
    }
});
