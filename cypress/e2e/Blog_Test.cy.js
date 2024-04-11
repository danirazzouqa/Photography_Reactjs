describe('Blog Post Interaction', () => {
    beforeEach(() => {
      
      cy.intercept('GET', 'http://localhost:4000/blogs', { fixture: 'blogPosts.json' }).as('fetchBlogs');
      cy.visit('http://localhost:3000/Blog');
      cy.wait('@fetchBlogs');
    });
  
    describe('Blog Post Content Verification', () => {
      it('Verifies the content of a blog post', () => {
        cy.get('h2').should('contain', 'Sara & David');
        cy.get('p').should('contain', 'They held hands, their fingers entwined, and spoke of the future, their voices a soft melody in the night. Sarah looked into David\'s eyes, and in that gaze, they found their whole world. Their love story was a masterpiece, written one chapter at a time in this cherished, secret place.');
        cy.get('img[src*="1711724892720.png"]').should('be.visible');
      });
    });
  
    describe('Image Modal Interaction', () => {
      it('Opens and closes the image modal', () => {
        
        cy.get('img[src*="1711724892720.png"]').click();
        cy.wait(2000)
        cy.get('button:has(svg)').click();
      });
    });
  });
  