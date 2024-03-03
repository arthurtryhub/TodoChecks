const s = {
  listInput: '[id="todo-input"]',
  itemInList: '[data-testid="todo-item"]',
  counterItemsLeft: '[class="todo-count"]',
  itemToggle: '[data-testid="todo-item-toggle"]',
  removeBtn: '[data-testid="todo-item-button"]',

  footer: '[data-testid="footer-navigation"]',
};

class TodoPage {
  open() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  addItem(name){
    cy.get(s.listInput).type(`${name}{enter}`);

  }

  validateItemInTheList(name){
    cy.contains(s.itemInList, name).should('exist')
  }

  completeItem(name){
    cy.contains(s.itemInList, name).find(s.itemToggle).click()
  }

  validateItemCompleted(name){
    cy.contains(s.itemInList, name).should('have.class', 'completed')
  }

  deleteItem(name){
    cy.contains(s.itemInList, name).find(s.removeBtn).click({force:true})
  }

  itemNotExist(name){
    cy.contains(s.itemInList, name).should('not.exist')
  }

  editItem(name, newName){
    cy.contains(s.itemInList, name).dblclick()
    cy.get('[class="view"]')
      .find(`[data-testid='text-input']`)
      .clear()
      .type(`${newName}{enter}`)
  }

  validateList(itemArray){
    itemArray.forEach(element => {
      this.validateItemInTheList(element.name)
    });
  }

  addList(itemArray){
    itemArray.forEach(element => {
      this.addItem(element.name)
    });
  }

  validateItemsLeft(counter){
    cy.get(s.counterItemsLeft).should('contain.text', counter)
    cy.get(s.counterItemsLeft).should('contain.text', "left!")
  }

  selectAllList(){
    cy.get(s.footer).find(`[href="#/"]`).click()
    cy.get(s.footer)
    .find('[class="selected"]').should('have.text', "All")
  }

  selectActiveList(){
    cy.get(s.footer).find(`[href="#/active"]`).click()
    cy.get(s.footer)
    .find('[class="selected"]').should('have.text', "Active")
  }

  selectCompletedList(){
    cy.get(s.footer).find(`[href="#/completed"]`).click()
    cy.get(s.footer)
    .find('[class="selected"]').should('have.text', "Completed")
  }
}
export default new TodoPage();
