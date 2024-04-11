describe('Desktop Navigation', () => {
    beforeEach(() => {
        
        cy.viewport('macbook-15');
        cy.visit('http://localhost:3000/'); 
    });

    it('Navigates to the About page from the landing page', () => {
        cy.get('a[href="/about"]').eq(1).click({ force: true });
        cy.url().should('include', '/about');
       
    });

    it('Navigates to the Projects page from the landing page', () => {
        cy.get('a[href="/projects"]').eq(1).click({ force: true });
        cy.url().should('include', '/projects');
       
    });

    it('Navigates to the Blog page from the landing page', () => {
        cy.get('a[href="/blog"]').eq(1).click({ force: true });
        cy.url().should('include', '/blog');
        
    });

    it('Navigates to the Gallery page from the landing page', () => {
        cy.get('a[href="/gallery"]').eq(1).click({ force: true });
        cy.url().should('include', '/gallery');
        
    });

    it('Navigates to the Prints page from the landing page', () => {
        cy.get('a[href="/prints"]').eq(1).click({ force: true });
        cy.url().should('include', '/prints');
        
    });

    it('Navigates to the Contact page from the landing page', () => {
        cy.get('a[href="/contact"]').eq(1).click({ force: true });
        cy.url().should('include', '/contact');
        
    });

    
    context('From Non-Authenticated State', () => {
        it('Navigates to the Sign In page from the landing page', () => {
            cy.get('a[href="/SignIn"]').eq(1).click({ force: true });
            cy.url().should('include', '/SignIn');
            
        });
        
    });

    
});
