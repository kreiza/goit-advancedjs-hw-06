interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання
const pair: KeyValuePair<string, number> = {
  key: 'id',
  value: 123
};

export {};