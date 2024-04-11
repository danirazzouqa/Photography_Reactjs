describe('Upload Functionality Test (blog posts)', () => {
    it('Logs in and navigates to the welcome page, click on blogs, then upload the blog post', () => {


        cy.visit('http://localhost:3000/SignIn');
  
        cy.get('input[type="email"]').type('1to2@gmail.com'); 
        cy.get('input[type="password"]').type('Dany157Haseo@');
        cy.get('form').submit();
        cy.wait(5000);
        cy.get('a[href="/blog"]').eq(1).click({ force: true });
        cy.intercept('GET', 'http://localhost:4000/blogs').as('loadData');
        cy.wait('@loadData');
        cy.get('input[type="text"]').should('be.enabled').type('My New Blog Post'); 
        cy.get('textarea[name="story"]').type('This is a great blog post about Cypress.');

    cy.get('input[type="file"]').selectFile('cypress/fixtures/12.png'); 
    cy.contains('Submit').click(); 
    });
  });