import useSwr from 'swr';
import { fetchJson } from './fetchJson';

export function useProjects() {
  const { data: projects, mutate: mutateProjects } = useSwr('/api/projects', fetchJson);

  return
}