import TodoPage from '../../page-object/pages/todoPage';
import { getList } from '../../support/dataGeneratoe';


describe('Todos Checklist spec', () => {
  it('Create List', () => {
    const list = getList(4)
    TodoPage.open()
    TodoPage.addList(list)
    TodoPage.validateList(list)
    TodoPage.validateItemsLeft(4)
  })

  it('Complete item from the List', () => {
    const list = getList(2)
    TodoPage.open()
    TodoPage.addList(list)
    TodoPage.validateList(list)
    TodoPage.validateItemsLeft(2)
    TodoPage.completeItem(list[0].name)
    TodoPage.validateItemCompleted(list[0].name)
    TodoPage.validateItemsLeft(1)
    
    TodoPage.selectCompletedList()
    TodoPage.validateItemCompleted(list[0].name)
    TodoPage.validateItemsLeft(1)

    TodoPage.selectActiveList()
    TodoPage.itemNotExist(list[0].name)
    TodoPage.validateItemsLeft(1)

  })

  it('Remove item from the List', () => {
    const list = getList(4)
    TodoPage.open()
    TodoPage.addList(list)
    TodoPage.validateList(list)
    TodoPage.validateItemsLeft(4)
    TodoPage.deleteItem(list[0].name)

    TodoPage.itemNotExist(list[0].name)
    TodoPage.validateItemsLeft(3)
    TodoPage.selectCompletedList()
    TodoPage.itemNotExist(list[0].name)
    TodoPage.validateItemsLeft(3)

    TodoPage.selectActiveList()
    TodoPage.itemNotExist(list[0].name)
    TodoPage.validateItemsLeft(3)
  })

  it('Edit item from the List', () => {
    const list = getList(4)
    TodoPage.open()
    TodoPage.addList(list)
    TodoPage.validateList(list)
    TodoPage.validateItemsLeft(4)
    TodoPage.editItem(list[0].name, `${list[0].name}+changed`)

    TodoPage.validateItemInTheList(`${list[0].name}+changed`)
    TodoPage.validateItemsLeft(4)
    TodoPage.selectActiveList()

    TodoPage.validateItemInTheList(`${list[0].name}+changed`)
    TodoPage.validateItemsLeft(4)
    TodoPage.selectCompletedList()
    TodoPage.itemNotExist(`${list[0].name}+changed`)
  })

})