import {Then, When, Before, Given} from "@badeball/cypress-cucumber-preprocessor";

export type IBehaviouralWorld<Type extends {}> = Type & Mocha.Context;
export type IDuckDuckGoWorld = IBehaviouralWorld<{
  duckDuckGo: {
    visited: boolean;
    url: string
  };
}>;

Before(function (this: IDuckDuckGoWorld) {
  this.duckDuckGo = {
    url: "https://duckduckgo.com/",
    visited: false
  }

  cy.wrap(this.duckDuckGo).as('duckDuckGo')
})


Given(/^Duck Duck go world$/, function (this: IDuckDuckGoWorld) {
  // some things to setup the world
  this.duckDuckGo.url = "https://duckduckgo.com/";

  cy.get('@duckDuckGo').then(async (duckDuckGo) => {

    cy.request({
      method: 'GET',
      // url to take somethign public from github
      url: 'https://api.github.com/repos/cypress-io/cypress/commits?per_page=1&sha=master',
    }).then(async (response) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
      cy.log('made some async action', duckDuckGo)
      cy.log('response status', response.status)
    })


  });
});


When("I visit duckduckgo.com", function (this: IDuckDuckGoWorld) {
  cy.visit(this.duckDuckGo.url).then(async () => {
    this.duckDuckGo.visited = true;
  });
});

Then("I should see a search bar", function (this: IDuckDuckGoWorld) {
  // cy.get('"input[type=text]"').invoke('val').then((value) => {
  //   cy.log('value', value)
  //   expect(value).toEqual('john.doe');
  // });

  cy.get("input[type=text]").then(async (element) => {
    // expect(true).toEqual(true);
    assert.equal(element.val(), '');
    assert.equal(element.attr('placeholder'), "Search the web without being tracked");
  })
  cy.get("input[type=text]").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

  console.log('>>> duck duck go world', this.duckDuckGo)
  cy.log('duck duck go world', this.duckDuckGo)

  assert.deepEqual({}, {});
});
