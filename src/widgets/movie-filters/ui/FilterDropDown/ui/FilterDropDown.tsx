import { sortOptions, type SortBy } from '../model/consts'

interface Props {
    sortBy: SortBy,
    setSortBy: (e: any) => void
}

export function FilterDropDown({sortBy, setSortBy}: Props){
    return (
        <select
          id="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
    )
}