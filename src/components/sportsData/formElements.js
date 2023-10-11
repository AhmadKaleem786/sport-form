import { TextInput, Label } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { handleInfo } from "../../features/sportSlice";

const FormElements = ({ formData, formName, parentName }) => {
  const { formInfo } = useSelector((store) => store.sport);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mb-2 block">
        <Label value={formData.label} />
      </div>
      <TextInput
        name={parentName + formName}
        sizing="md"
        value={formInfo?.[parentName]?.[formName]}
        required
        type={formData.type}
        placeholder={formData.placeholder}
        onChange={(e) =>
          dispatch(
            handleInfo({
              [parentName]: {
                ...formInfo?.[parentName],
                [formName]: [e.target.value],
              },
            })
          )
        }
      />
    </div>
  );
};

export default FormElements;
