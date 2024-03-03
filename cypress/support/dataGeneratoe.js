import faker from 'faker';

export const getItem = () => {
    return {
      name: faker.name.firstName(),
    };
  };

export const getList = (counter) => {
    let list = [];
    for (let i = 0; i < counter; i++) {
        list.push(getItem());
    }
    return list;
  };