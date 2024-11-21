import { SiTicktick } from "react-icons/si";

interface PointerProps {
    pointerText: string,
    pointerTitle: string
}
const Pointer = ({pointerText, pointerTitle}: PointerProps) => {
  return (
    <div className="flex items-center">
        <SiTicktick/>
        <div className="flex items-center justify-center mx-1">
            <h1>
                {pointerTitle}
            </h1>
            <h1 className="font-light">
                : {pointerText}
            </h1>
        </div>
    </div>
  )
}

export default Pointer