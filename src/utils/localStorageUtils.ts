function getObject<T>(key: string, defaultValue: T | null = null) {
  const serializedObjectOrNull: string | null = localStorage.getItem(key);
  return serializedObjectOrNull !== null ? JSON.parse(serializedObjectOrNull) : defaultValue;
}

function setObject<T>(key: string, object: T) {
  localStorage.setItem(key, JSON.stringify(object));
}

function upsertObject<T>(key: string, defaultValue: T | null, upsert: (object: T) => T) {
  setObject(key, upsert(getObject<T>(key, defaultValue)));
}

export default {getObject, setObject, upsertObject};
