import { Label, TextInput, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import Sport from "./sport";
import { handleInfo } from "../../features/sportSlice";

const SportsData = () => {
  const { formData, formInfo } = useSelector((store) => store.sport);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    data.preventDefault();
    console.log(formInfo);
  };

  return (
    <form style={{ backgroundColor: "lightblue" }} onSubmit={handleSubmit}>
      <div className="flex max-w-md flex-col gap-4" style={{ paddingLeft: 25 }}>
        <div
          className="mb-2 block"
          style={{ fontSize: 50, textAlign: "center" }}
        >
          "{formData.title}"
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Name (Required)" />
          </div>
          <TextInput
            name="name"
            sizing="sm"
            type="text"
            value={formInfo?.name}
            autoComplete="name"
            required
            placeholder="Field is required..."
            onChange={(e) =>
              dispatch(handleInfo({ [e.target.name]: [e.target.value] }))
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Father Name (Required)" />
          </div>
          <TextInput
            name="fatherName"
            sizing="md"
            type="text"
            value={formInfo?.fatherName}
            autoComplete="father"
            required
            placeholder="Field is required..."
            onChange={(e) =>
              dispatch(handleInfo({ [e.target.name]: [e.target.value] }))
            }
          />
        </div>
        <div>
          <div className="mb-5 block">
            <Label value={formData.description} />
          </div>
          <div>
            {formData.actions.map((s, index) => {
              return <Sport key={index} sporting={s} />;
            })}
            <br />
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: 25 }}>
        <Button type="submit" color="success">
          Submit
        </Button>
      </div>
      <br />
    </form>
  );
};
export default SportsData;
