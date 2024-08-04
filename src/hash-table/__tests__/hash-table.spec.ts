import { HashTable } from "../hash-table.entity";

describe("Hash Table", () => {
  it("should create an empty hash table", () => {
    const table = new HashTable();
    expect(table.size).toBe(10);
  });

  it("should set a value in the hash table", () => {
    const table = new HashTable();
    table.set("key", "value");
    expect(table.get("key")).toBe("value");
  });

  it("should set a value from the hash table with a number key", () => {
    const table = new HashTable();
    table.set(1, "value");
    expect(table.get(1)).toBe("value");
  });

  it("should set a value from the hash table with an existent key", () => {
    const table = new HashTable();
    table.set("key", "value");
    table.set("key", "value2");
    expect(table.get("key")).toBe("value2");
  });

  it("should throw an error when setting a value with an invalid key type", () => {
    const table = new HashTable();
    expect(() => table.set(true, "value")).toThrow("Invalid key type");
  });

  it("should delete a value from the hash table", () => {
    const table = new HashTable();
    table.set("key", "value");
    table.delete("key");
    expect(table.get("key")).toBeUndefined();
  });

  it("should display the hash table", () => {
    const table = new HashTable();
    table.set("key", "value");
    table.display();
  });

  it("should display the hash table with multiple buckets", () => {
    const table = new HashTable(5);
    table.set("key", "value");
    table.set("key2", "value2");
    table.display();
  });
});
