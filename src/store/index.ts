import { initial_collections } from "../data/mock";
import { ICollection } from "../types/index";
import { create } from "zustand";

export enum CollectionModalAction {
  REMOVE_COLLECTION,
  ADD_COLLECTION,
}

type CollectionStateType = {
  collections: ICollection[];
  selectedCollection?: ICollection;
  isCollectionModalOpen: boolean;
  collectionModalAction?: CollectionModalAction | undefined;

  createCollection: (collection: ICollection) => void;
  removeCollection: (id: string) => void;
  setSelectedCollection: (collection: ICollection) => void;
  showCollectionsModal: (action: CollectionModalAction) => void;
  hideCollectionsModal: () => void;
};

export const useRevaluStore = create<CollectionStateType>()((set) => ({
  collections: initial_collections,
  selectedCollection: undefined,
  isCollectionModalOpen: false,
  collectionModalAction: undefined,
  createCollection: (collection: ICollection) =>
    set((state) => ({ collections: [...state.collections, collection] })),
  removeCollection: (id: string) =>
    set((state) => ({
      collections: state.collections.filter((c) => c.id !== id),
    })),
  setSelectedCollection: (collection: ICollection) =>
    set((state) => ({
      selectedCollection: collection,
    })),
  showCollectionsModal: (action: CollectionModalAction) =>
    set((state) => ({
      isCollectionModalOpen: true,
      collectionModalAction: action,
    })),
  hideCollectionsModal: () =>
    set((state) => ({
      isCollectionModalOpen: false,
    })),
}));
