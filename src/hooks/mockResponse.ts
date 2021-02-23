import faker from "faker";
import { Entry } from "./Entry.type";

export const generateMockEntries = (n: number): Entry[] =>
  new Array(n).fill("").map(() => ({
    name: faker.internet.userName(),
    date: `${faker.date.past()}`,
    score: faker.random.number(1000000),
    seed: 4,
  }));

export const staticMockResponse: Entry[] = [
  {
    name: "Foo",
    score: 100000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 9000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Marjolaine_OKeefe33429082420948590285098240985205820945842",
    score: 90000,
    date: "2020-10-07T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar1",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz1",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat1",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo2",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar2",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz2",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat2",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo3",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar3",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz3",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat3",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo4",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar4",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz4",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat4",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo5",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar5",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz5",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat5",
    score: 11000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
];
