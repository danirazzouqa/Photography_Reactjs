describe('Prints Interaction', () => {
    beforeEach(() => {
      
      cy.intercept('GET', 'https://photography-reactjs.onrender.com/prints', { fixture: 'prints.json' }).as('fetchPrints');
      cy.visit('http://localhost:3000/prints');
      cy.wait('@fetchPrints');
    });
  
    describe('Navigation to Print Detail', () => {
      it('Navigates to and verifies a specific print detail page', () => {
        cy.get('div[data-testid="print-item"]').first().click();
        cy.url().should('include', 'Amman');
      });
    });
  
    describe('Print Detail Content Verification', () => {
      beforeEach(() => {
       
        cy.visit('http://localhost:3000/prints/Amman');
      });
  
      it('Verifies content of a detailed print page', () => {
        cy.get('h1').should('contain', 'Amman');
        cy.get('p').should('contain', 'Immerse yourself in the timeless beauty of Amman with this captivating picture print.');
        cy.get('img[src*="print.jpg-1708030871159-615504119"]').should('be.visible');
      });
  
      it('Verifies available sizes for a print', () => {
        cy.get('select#size').should('exist');
        cy.get('select#size option').should('have.length', 3);
      });
    });
  
    describe('Navigation to Contact Page from Print Detail', () => {
      beforeEach(() => {
        
        cy.visit('http://localhost:3000/prints/Amman');
      });
  
      it('Navigates to the contact page when "Get Price" is clicked', () => {
        cy.contains('a', 'Get Price').click();
        cy.url().should('include', '/contact');
      });
    });
  });
  