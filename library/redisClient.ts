import { createClient } from "redis";

export const getStoredData = async (key: string) => {
  const client = createClient({ url: "redis://redis:6379" });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  const value = await client.get(key);

  return value;
};

export const storeData = async (key: string, data: any) => {
  const client = createClient({ url: "redis://redis:6379" });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  await client.set(key, data);

  const value = await client.get(key);

  return value;
};
