let some: unknown;
some = 'Text';

let str: string;
// Виправлення через перевірку типу або приведення
if (typeof some === 'string') {
    str = some;
}
// або так:
str = some as string;

export {};