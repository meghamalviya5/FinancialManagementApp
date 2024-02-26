import { useSelector } from "react-redux";
import { updateSortValue } from "../../actions/filterActions";

const Sort = () => {
  const incomeSort = useSelector((state) => state.sort.incomeSort);
  return (
    <div>
      <input
        type="checkbox"
        value={incomeSort}
        onChange={updateSortValue({ type: "incomeSort", value: !incomeSort })}
      />
    </div>
  );
};

export default Sort;
