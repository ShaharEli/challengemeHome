
const expectedDescription = "dcnlkdncdkncdkacndkcndkjcndakcndkwcndkncdkncdkncdk..."

describe("Inserted New Challenge", () => {
    it("cant send empty form ", () => {
      cy.visit("http://localhost:3000");
      cy.get('.MuiAvatar-root').click()
      cy.get('a > .MuiButtonBase-root').click()
      cy.get('body').click()
      cy.get('.newChallengeFormButtons > .MuiButton-containedPrimary').click()
      cy.get('.newChallengeFormDisplayErrors').children().should("have.length", 10);

    });
      
//     it("Check Theme Toggle", () => {
//       cy.visit("http://localhost:3000");      
//       if(cy.get("div.dark")){
//         cy.get('.MuiAvatar-root').click()
//         cy.get(':nth-child(2) > g > path').click()
//         cy.get("div.dark").should('not.exist')
//       }else{
//         cy.get('.MuiAvatar-root').click()
//         cy.get(':nth-child(2) > g > path').click()
//         cy.get("div.dark").should('exist')
//       }
//     });
  
//     it("Checks challenge cards", () => {
//       cy.server();
//       cy.route("**/api/v1/challenges", "fixture:challenges.json");
//       cy.route("**/api/v1/challenges/labels", "fixture:labels.json");
//       cy.route("**/api/v1/challenges?labels=&time=100", "fixture:labelsToChallenges.json");
//       cy.route("**/api/v1/image?id=7", "fixture:image7.json");
//       cy.visit("http://localhost:3000");
//       cy.get(':nth-child(5) > .challenge-card-creator-homepage > .avatar-and-repo-name > .MuiAvatar-root').invoke('text').should("eq","Sh")
//       cy.get(':nth-child(5) > .challenge-card-description-homepage').invoke('text').should("eq",expectedDescription)
      

//     });
  });