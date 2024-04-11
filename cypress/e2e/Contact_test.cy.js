describe('Contact Page Interaction', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000/contact');
    });
  
    describe('Email Contact Method', () => {
        it('Should display and open the Email contact option correctly', () => {
          cy.contains('danirazzouqa@gmail.com').should('be.visible');
          cy.get('[href^="mailto:"]').should('have.attr', 'href').and('include', 'mailto:danirazzouqa@gmail.com');
        });
     
        describe('WhatsApp Contact Method', () => {
            it('Should display and open the WhatsApp contact option correctly', () => {
              cy.contains('WhatsApp').should('be.visible');
              cy.get('[href^="https://wa.me"]').should('have.attr', 'href').and('include', 'https://wa.me/36204379679');
            });
          });
        
          describe('Messenger Contact Method', () => {
            it('Should display and open the Messenger contact option correctly', () => {
              cy.contains('Messenger').should('be.visible');
              cy.get('[href^="https://www.facebook.com"]').should('have.attr', 'href').and('include', 'https://www.facebook.com/dani.george.142/');
            });
          });
    });
  
    describe('Contact Form Submission', () => {
      beforeEach(() => {
        
        cy.intercept('POST', 'https://getform.io/thank-you?id=f5704890-6b1d-49bc-98f7-757e1ee9de12', (req) => {
            req.reply({
          statusCode: 200,
          body: {
            message: "Form submission intercepted"
          }
        }).as('formSubmission');
      });
    });
      it('Should allow filling and submitting the contact form', () => {
        
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('This is a test message.');
        cy.contains('Send Message').click();
       
  
        
      });
    });
  });
  