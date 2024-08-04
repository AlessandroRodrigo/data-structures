export class HashTable<K, V> {
  private _buckets: Array<Array<[K, V]>>;
  private _size: number;

  constructor(size = 10) {
    this._buckets = new Array(size);
    this._size = size;
  }

  get size(): number {
    return this._size;
  }

  private hash(key: K): number {
    let total = 0;

    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    } else {
      throw new Error("Invalid key type");
    }

    return total % this._size;
  }

  set(key: K, value: V): void {
    const bucket = this._buckets[this.hash(key)];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }

      bucket.push([key, value]);
    } else {
      this._buckets[this.hash(key)] = [[key, value]];
    }
  }

  get(key: K): V | undefined {
    const bucket = this._buckets[this.hash(key)];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }

  delete(key: K): void {
    const index = this.hash(key);
    const bucket = this._buckets[index];
    const itemIndex = bucket.findIndex((item) => item[0] === key);

    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
    }
  }

  display(): void {
    this._buckets.forEach((bucket, index) => {
      console.log(`Bucket ${index}:`);
      bucket.forEach((item) => {
        console.log(`\t${item[0]} -> ${item[1]}`);
      });
    });
  }
}
