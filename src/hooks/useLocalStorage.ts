type KeyStoredValues =
  | 'token'
  | 'searchString'
  | 'onlyShort'
  | 'savedSearchString'
  | 'savedOnlyShort';
type StoredValues = string | boolean;
interface StorageValues extends Partial<Record<KeyStoredValues, StoredValues>> {}

export const useLocalStorage = () => {
  const setValues = (values: StorageValues): void => {
    Object.entries(values).forEach(([key, value]) =>
      localStorage.setItem(key, JSON.stringify(value)),
    );
  };

  const getValue = <T extends StoredValues>(key: KeyStoredValues, defaultValue: T): T => {
    return JSON.parse(localStorage.getItem(key) ?? 'null') ?? defaultValue;
  };

  const setDefaultValues = () => {
    setValues({
      onlyShort: false,
      searchString: '',
      token: '',
      savedOnlyShort: false,
      savedSearchString: '',
    });
  };

  return { setValues, getValue, setDefaultValues };
};
