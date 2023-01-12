const todos = [
    {
    "id": 1,
    "name": "Buy Milk",
    "isComplete": false
  },
  {
    "id": 2,
    "name": "Buy Eggs",
    "isComplete": false
  },
  {
    "id": 3,
    "name": "Buy Bread",
    "isComplete": false
  },
  {
    "id": 4,
    "name": "Make French Toast",
    "isComplete": false
}]
describe('App initialization', () => {
    it.only('Loads todos on page load', () => {
        cy.server()
        cy.route('get','/api/todos',todos )
        cy.visit('/')
    })
})