import AsyncSelect from 'react-select/async';
import { fetchJson } from '../../../../../lib/fetchJson';
import { toast } from 'react-toastify';

export function SelectRepo({ setFieldValue }) {
  // repository selection search-box
  function filterOptions(inputValue: string, options: any[]) {
    return options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  // fetch github repositories.
  async function loadOptions(inputValue: string) {
    try {
      const repos: any[] = await fetchJson('https://api.github.com/users/sinabyr/repos?sort=created');
      const options = repos.map(r => {
        return {
          value: r.name,
          label: r.name
        }
      })
      return filterOptions(inputValue, options);
    } catch(err) {
        toast.error(err.message, {
          hideProgressBar: true,
          autoClose: false,
          position: 'bottom-center',
          theme: 'dark',
          style: {fontSize: '15px', textAlign: 'center'}
        });
    }
  };

  return (
    <AsyncSelect
      name="repo"
      id="repo"
      placeholder=""
      onChange={(e: any) => setFieldValue('repo', e.value)}
      styles={{
        singleValue: baseStyles => ({
          ...baseStyles,
          color: '#f4f4f4',
        }),
        input: baseStyles => ({
          ...baseStyles,
          color: '#f4f4f4',
        }),
        control: baseStyles => ({
          ...baseStyles,
          backgroundColor: '#1a1d1d',
          paddingBottom: '3px',
          marginBottom: '1rem',
          border: '1px solid #020303',
        }),
        option: baseStyles => ({
          ...baseStyles,
          color: '#1a1d1d'
        }),
        menu: baseStyles => ({
          ...baseStyles,
          zIndex: 2
        })
      }}
      loadOptions={loadOptions}
      defaultOptions
      />
  )
}