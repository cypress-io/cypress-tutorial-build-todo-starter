describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  })

  it('accepts input', () => {
    const typedText = 'Buy Milk' 

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })

  context('Form submission', () => {
    beforeEach(() => {
      cy.server()
    })
    it('adds a new todo on submit', () => {
      const itemText = 'Buy Eggs'
      cy.route('POST', '/api/todos', {
        name: itemText,
        id: 1,
        isComplete: false
      })

      cy.get('.new-todo')
        .type(itemText)
        .type('{enter}')
        .should('have.value', '')

      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', itemText)
    })

    it('shows an error message on a failed submisssion', () => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {}
      })

      cy.get('.new-todo')
        .type('test{enter}')

      cy.get('.todo-list li')
        .should('not.exist')
      
      cy.get('.error')
        .should('be.visible')
    })
  })
})