import { ReactElement } from 'react'

interface SelectPorps {
  currentSortOption: 'author' | 'timestamp'
  onSortOptionChange: (newSortOption: 'author' | 'timestamp') => void
}
export function Select({
  currentSortOption,
  onSortOptionChange,
}: SelectPorps): ReactElement {
  const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortOptionChange(e.target.value as 'author' | 'timestamp')
  }
  return (
    <>
      <section className='card-container'>
        <div className='sort-options'>
          <label htmlFor='sort' className='sort-label'>
            Sort by:
          </label>
          <select
            className='sort'
            id='sort'
            value={currentSortOption}
            onChange={handleSortOptionChange}
          >
            <option value='author'>Author</option>
            <option value='timestamp'>Timestamp</option>
          </select>
        </div>
      </section>
    </>
  )
}
