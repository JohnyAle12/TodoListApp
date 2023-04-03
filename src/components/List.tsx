
type Props = {
    children: JSX.Element[]
}

export const List = ({children}: Props) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        { children }
    </div>
  )
}
