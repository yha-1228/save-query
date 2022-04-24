import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const hasProps = (object: Record<string, unknown>, props: string[]) => {
  for (const prop of props) {
    const valid = Object.prototype.hasOwnProperty.call(object, prop);
    if (!valid) return false;
  }

  return true;
};

const useQueryState = <T extends Record<string, string>>(initialState: T) => {
  const router = useRouter();
  const [values, setValues] = useState<T>(initialState);

  useEffect(() => {
    const query = router.query;

    if (!hasProps(query, Object.keys(initialState))) return;

    setValues(query as T);
  }, [initialState, router.query]);

  return [values, setValues] as const;
};

export default useQueryState;
