describe('Upload Functionality Test (images)', () => {
    it('Logs in and navigates to the welcome page, then searches for "LandScape" and click it, then upload the image and check if its successfully uploaded', () => {

      cy.visit('http://localhost:3000/SignIn');
  
      cy.get('input[type="email"]').type('1to2@gmail.com'); 
      cy.get('input[type="password"]').type('Dany157Haseo@'); 
      cy.get('form').submit();
      cy.wait(5000); 
      cy.contains('LandScape').click(); 
      cy.get('input[type="file"]').selectFile('cypress/fixtures/1.png');
      cy.contains('Upload Images').click(); 
      cy.contains('Images uploaded successfully!').should('be.visible'); 

     
    });
  });
 

  