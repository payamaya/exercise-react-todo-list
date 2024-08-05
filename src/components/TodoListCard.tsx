import { IAddList } from '../interfaces'

interface ITodoListCardProps {
  listCard: IAddList
}
export function TodoListCard({ listCard }: ITodoListCardProps) {
  return (
    <div>
      <p>{listCard.title}</p>
      <h2>{listCard.description}</h2>
      <h3>{listCard.timestamp}</h3>
    </div>
  )
}
