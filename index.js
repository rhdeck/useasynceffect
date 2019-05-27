import { useEffect, useState } from "react";
const useAsyncEffect = (promise, conditions) => {
  const [unmount, setUnmount] = useState(null);
  useEffect(() => () => unmount && unmount(), [unmount]);
  return useEffect(() => {
    (async () => {
      try {
        const unmount = await promise();
        setUnmount(unmount);
      } catch (e) {
        setUnmount(null);
      }
    })();
  }, conditions);
};
export default useAsyncEffect;
