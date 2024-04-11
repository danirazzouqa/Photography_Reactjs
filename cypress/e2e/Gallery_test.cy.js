describe('Gallery Categories', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:4000/categories', { fixture: 'categories.json' }).as('fetchCategories');
      cy.visit('http://localhost:3000/Gallery');
      cy.wait('@fetchCategories');
    });
  
    it('Displays categories correctly', () => {
      cy.get('.container').should('exist');
      cy.get('.container div');
    });
  });
  describe('Gallery Images within a Category', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:4000/images?categoryName=*', { fixture: 'images.json' }).as('fetchImages');
      cy.visit('http://localhost:3000/Gallery/AllCategories');
      cy.wait('@fetchImages');
    });
  
    it('Displays images correctly', () => {
      cy.get('.grid div');
    });
  });

  describe('Image Modal Interaction', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:4000/images?categoryName=*', { fixture: 'images.json' }).as('fetchImages');
      cy.visit('http://localhost:3000/Gallery/LandScape');
      cy.wait('@fetchImages');
    });
  
    it('Opens and closes the image modal', () => {
      cy.get('.grid img').eq(1).click();
      cy.wait(2000);
      cy.get('button:has(svg)').click();
    });
  });
  