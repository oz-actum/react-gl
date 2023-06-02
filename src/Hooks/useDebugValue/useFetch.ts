import { useCallback, useDebugValue, useEffect, useState } from "react";

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<Array<UserData>>([]);
  const [status, setStatus] = useState<number>();

  useDebugValue("State of API Call: " + status);

  const getData = useCallback(async () => {
    try {
      const resp = await fetch(url);
      setResponse(await resp.json());
      setStatus(resp.status);
    } catch (err) {
      console.warn(err);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData, url]);

  return { response };
};
