import { create } from "zustand";
import { CardType } from "@/types/cardType";

interface JobState {
  jobs: CardType[];
  filters: string[];
  setJobs: (jobs: CardType[]) => void;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  getFilteredJobs: () => CardType[];
}

const useStore = create<JobState>((set) => ({
  // The list of all jobs
  jobs: [],

  // The list of active filters
  filters: [],

  // Function to set the list of jobs
  setJobs: (jobs: CardType[]) => set(() => ({ jobs })),

  // Function to add a filter
  addFilter: (filter: string) =>
    set((state) => ({ filters: [...state.filters, filter] })),

  // Function to remove a filter
  removeFilter: (filter: string) =>
    set((state) => ({ filters: state.filters.filter((f) => f !== filter) })),

  // Function to get the filtered jobs
  getFilteredJobs: () => {
    const { jobs, filters } = useStore.getState() as JobState;
    if (filters.length === 0) {
        return jobs; // Return all jobs if there are no filters
    }
    return jobs.filter((job: CardType) => {
      // Assuming 'role', 'level', 'languages', and 'tools' are properties of 'CardType'
      const tags = [
        job.role,
        job.level,
        ...(job.languages || []),
        ...(job.tools || []),
      ];
      return filters.every((filter: string) => tags.includes(filter));
    });
  },
}));

export default useStore;
