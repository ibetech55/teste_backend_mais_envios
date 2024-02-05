import { v4 as uuid } from "uuid";

export class InMemoryDatabase<T extends { id?: string }> {
  data: T[];
  constructor() {
    this.data = [];
  }

  createMany(newItems: T[]):T[] {
    const newData = newItems.map((newItem:T)=>({ id: uuid(), ...newItem }))
    this.data = [...this.data, ...newData];
    return newData;
  }

  find():T[] {
    return this.data;
  }

  findById(id: string):T | undefined {
    return this.data.find((item) => item.id === id);
  }

  update(id: string, updatedItem) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...updatedItem };
      return this.data[index];
    }
    return null;
  }

  delete(id: string):T {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedItem = this.data.splice(index, 1);
      return deletedItem[0];
    }
    return null;
  }

  findOneBy(properties: Partial<T>): T | undefined {
    return this.data.find((item) => {
      return Object.keys(properties).every(
        (key) => item[key] === properties[key]
      );
    });
  }
}
