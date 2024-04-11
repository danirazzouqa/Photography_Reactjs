describe('User Onboarding Flow', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000/SignIn');
    });
  
    describe('Navigating from SignIn to SignUp', () => {
      it('Should navigate to the SignUp page when the Sign up button is clicked', () => {
       
        cy.contains('Sign up').click();
        cy.url().should('include', 'http://localhost:3000/Signup');
      });
    });
  
    describe('Submitting the SignUp Form with error', () => {
      beforeEach(() => {

        cy.visit('http://localhost:3000/Signup');
        cy.get('input[type="text"]').type('John Doe');
        cy.get('input[type="email"]').type('john@example.com');
        cy.get('input[type="password"]').type('password123');
        
      });
  
      it('Should submit the form and get error message', () => {
        cy.get('form').submit();
        cy.contains('Password not strong enough').should('be.visible');
      });
    });

    describe('Submitting the SignUp Form Email already exists', () => {
        beforeEach(() => {

          cy.visit('http://localhost:3000/Signup');
          cy.get('input[type="text"]').type('John Doe');
          cy.get('input[type="email"]').type('john@example.com');
          cy.get('input[type="password"]').type('Password123@');
          
        });
    
        it('Should submit the form and get error message', () => {
          cy.get('form').submit();
          cy.contains('Email already in use').should('be.visible');
        });
      });
      describe('Submitting the SignUp Form success', () => {
        beforeEach(() => {
    
          cy.visit('http://localhost:3000/Signup');
          cy.get('input[type="text"]').type('John Doe');
          cy.get('input[type="email"]').type('john1@example.com');
          cy.get('input[type="password"]').type('Password123@');
          
        });
    
        it('Should submit the form ', () => {
          cy.get('form').submit();
        });
      });
  });
  