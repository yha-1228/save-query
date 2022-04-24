import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type UseQueryValuesOptions<T> = {
  initialState: T;
  requieredKeys: string[];
};

const hasProps = (object: Record<string, unknown>, props: string[]) => {
  for (const prop of props) {
    const valid = Object.prototype.hasOwnProperty.call(object, prop);
    if (!valid) return false;
  }

  return true;
};

const useQueryValues = <T extends Record<string, string>>(options: UseQueryValuesOptions<T>) => {
  const { initialState, requieredKeys } = options;

  const router = useRouter();
  const [values, setValues] = useState<T>(initialState);

  useEffect(() => {
    const query = router.query;

    if (!hasProps(query, requieredKeys)) return;

    setValues(query as T);
  }, [requieredKeys, initialState, router.query]);

  return [values, setValues] as const;
};

export default useQueryValues;
