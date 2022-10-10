
beforeEach(()=>{
  cy.seedDatabase();
  
})
afterEach(()=>{
  cy.resetDatabase();
});

describe('testing "/"', () => {
  it('Testing if the register goes well"', () => {
    cy.visit('http://localhost:3000/register');
    cy.get("input[cyName=inputName]").type("jeje");
    cy.get("input[cyName=inputImageUrl]").type("https://fduifefu");
    cy.get("input[cyName=inputEmail]").type("jeje@email.com");
    cy.get("input[cyName=inputPassword]").type("1122");
    cy.get("input[cyName=inputConfirmPassword]").type("1122");
    cy.intercept("POST", "http://localhost:5000/register").as("register");
    cy.get("button[cyName=submitButton]").click();
    cy.wait("@register");
    cy.url().should('equal','http://localhost:3000/login');
  });
 
})

