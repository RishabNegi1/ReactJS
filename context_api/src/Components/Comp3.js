import { useContext } from "react";
import { Con} from "../App";

const Comp3 = () => {
    const conData = useContext(Con);
  return (
    <div className="c">
    <div>Comp3</div>
    <h2>{conData.data}</h2>
    <h2>name: {conData.name.name}</h2>
    <h2>age: {conData.name.age}</h2>
    </div>
  )
}

export default Comp3