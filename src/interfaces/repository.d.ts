import { TRepository } from "@base/types/repository";

/**
 * Represents a handle for managing a collection of repositories.
 */
export interface IRepositoryHandle {
  /**
   * An array of repositories.
   */
  items: TRepository[];

  /**
   * An optional search query to filter repositories.
   */
  search?: string;
}
