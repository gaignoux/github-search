"use client";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

/**
 * This module provides a storage utility that interfaces with the browser's local storage.
 * If local storage is not available (e.g., in a server-side rendering environment),
 * a no-op storage implementation is used.
 *
 * @module storage
 */
const createNoopStorage = () => {
  return {
    /**
     * Retrieves an item from storage.
     *
     * @param {*} _key - The key to retrieve the item.
     * @returns {Promise<null>} A promise that resolves with `null`.
     */
    getItem(_key: any): Promise<null> {
      return Promise.resolve(null);
    },

    /**
     * Sets an item in storage.
     *
     * @param {*} _key - The key to set the item.
     * @param {*} value - The value to store.
     * @returns {Promise<any>} A promise that resolves with the stored value.
     */
    setItem(_key: any, value: any): Promise<any> {
      return Promise.resolve(value);
    },

    /**
     * Removes an item from storage.
     *
     * @param {*} _key - The key to remove the item.
     * @returns {Promise<void>} A promise that resolves when the item is removed.
     */
    removeItem(_key: any): Promise<void> {
      return Promise.resolve();
    },
  };
};

/**
 * Storage instance that interacts with local storage if available,
 * otherwise uses a no-op storage implementation.
 */
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
