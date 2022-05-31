describe('Authentication', () => {
    describe('Registration', () => {
        it('shows a registration link on home page', () => {
            cy.visit('/').contains('Register')
        })
        it('shows a registration page')
        it('should see a form in the registration page')
        it('should be able to register an account')
    });

    describe('Login', () => {
        it('shows a login link on home page')
        it('shows a login page')
        it('should show a form in the login page')
        it('should be able to login to existing account')
    });
});
