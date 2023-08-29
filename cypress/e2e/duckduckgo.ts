import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {IDuckDuckGoWorld} from "./duckduckgo-world";
import expect from 'expect';

When("I visit duckduckgo.com", function (this: IDuckDuckGoWorld) {
  cy.visit("https://duckduckgo.com/").then(async () => {
    this.hello = true;
  });
});

Then("I should see a search bar", () => {
  // cy.get('"input[type=text]"').invoke('val').then((value) => {
  //   cy.log('value', value)
  //   expect(value).toEqual('john.doe');
  // });

  cy.get("input[type=text]").then(async (element) => {
    expect(true).toEqual(true);
    assert.equal(element.val(), '');
    assert.equal(element.attr('placeholder'), "Search the web without being tracked");
  })
  cy.get("input[type=text]").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
  //
  assert.deepEqual({}, {});
});
