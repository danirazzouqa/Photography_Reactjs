describe('SignIn Component Tests', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000/SignIn');
    });
  
 
    it('Displays error for non-existent email address', () => {
     
      cy.get('input[type="email"]').type('nonexistent@example.com');
      cy.get('input[type="password"]').type('dummyPassword');
      cy.get('button[type="submit"]').click();
      cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');
    
      cy.contains('Incorrect email').should('be.visible');
    });
  
    it('Shows error for incorrect password', () => {
      
      cy.get('input[type="email"]').type('1to2@gmail.com');
      cy.get('input[type="password"]').type('wrongPassword');
      cy.get('button[type="submit"]').click();
      cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');
      cy.contains('Incorrect password').should('be.visible');
    });

    describe('Successful Login and Navigation', () => {
       
      
        it('Logs in successfully and navigates to the welcome page', () => {
          
          cy.intercept('POST', 'http://localhost:4000/login', { 
            statusCode: 200,
            body: {
              user: {
                name: 'Dany',
              },
            },
          }).as('loginSuccess');
      
          cy.get('input[type="email"]').type('1to2@gmail.com');
          cy.get('input[type="password"]').type('Dany157Haseo@');
          cy.get('form').submit();
          cy.url().should('include', 'http://localhost:3000/WelcomePage');
          cy.contains('Welcome, dany!').should('be.visible');
        });
      });
  });
  