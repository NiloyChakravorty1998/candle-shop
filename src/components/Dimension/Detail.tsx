interface DetailProps {
    property: string,
    value: string
}
const Detail = ({property, value}: DetailProps) => {
  return (
    <div className="flex gap-1">
        <h1 className="font-semibold">{property}</h1>
        <h1>: {value}</h1>
    </div>
  )
}

export default Detail