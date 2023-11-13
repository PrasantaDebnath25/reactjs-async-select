import { useState, useEffect, useReducer } from 'react'
import axios from "axios";
import Reducer from '../../services/Reducer';
import SearchCasesInput from './SearchCasesInput';

const initState = {
  caseListForSelect: [],
  selectedCases: [],


  selectedPeople: '',
  selectedProfile: "",

};

function Single() {
  const [state, dispatch] = useReducer(Reducer, initState);
  const [page, setPage] = useState(1);
  const [caseSearchValue, setCaseSearchValue] = useState("");
  useEffect(() => {
    getCases(page);

  }, [page]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // if (caseSearchValue !== "") {
      getCases(1);
      // }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [caseSearchValue]);
  const getCases = async (pages = page) => {
    // try {
      dispatch({ type: "LOAD", payload: true });
      const payload = {
        searchKey: caseSearchValue,
        limit: 10,
        page: pages,
        startDate: "",
        endDate: "",
        stage: "",
        caseStatus: "A",
        orderBy: "",
      };

      const header = {
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFzYW50YUB0ZWNobm9leHBvbmVudC5jb20iLCJpYXQiOjE2OTk1OTczMzEsImV4cCI6MTY5OTY0MDUzMX0._ipQwXTBXAdlvwUBkmZwTymZ9zR-cVRTE0DoBZopWSzhHr5XXWBwM5MqYGXe5tIDQpQmBbAST8XRwbG3akK5Jw"
        }
      }
      let res = await axios.post('https://ecstest.zls.app/core-extension/api/v2/controller/case/list', payload, header);
      // const res = await response.json();
      setPage(pages)
      console.log(res)
      if (res.data.status === 200) {
        console.log("Inside")
        if (res.data?.data?.length) {
          console.log("Inside 1")
          let cases = res.data.data.map((data, index) => {
            console.log("Inside 1 map", index)

            return {
              id: data.caseId,
              value: data.caseNumber,
              tagValue: data.caseNumber,
              label:
                data.caseNumber +
                " - " +
                data?.client?.lastName +
                ", " +
                data?.client?.firstName +
                " - "
            };
          });
          console.log("Inside cases", cases)
          let list = state.caseListForSelect;
          if (pages === 1) {
            list = cases
          } else {
            list.push(...cases);
          }

          const newData = list.filter((item) => item.label !== "See more");
          res.data.total_item > list.length &&
            newData.push({ label: "See more" });
          dispatch({
            type: "SETDATA",
            payload: { name: "caseListForSelect", value: newData },
          });
        }
        dispatch({ type: "LOAD", payload: false });
      } else {
        dispatch({ type: "LOAD", payload: false });
      }
    // } catch (error) {
    //   // dispatch({ type: "LOAD", payload: false });
    // }
  };


  console.log("state---", state)
  const loadMoreCases = () => {
    console.log("loadMoreCases")
    setPage(page + 1);
  };

  const searchCases = (value) => {
    setCaseSearchValue(value);
  };
  const selectCases = (data) => {
    console.log("Selleected", data)
    let filteres = data.filter((lst) => lst.label !== "See more")
    const ids = filteres.map((s) => s.id);
    handleChange("selectedCaseIds", ids);
    handleChange("selectedCases", filteres);
  };
  const handleChange = (name, value) => {
    dispatch({
      type: "SETDATA",
      payload: {
        name: `${name}`,
        value: value,
      },
    });
  };

  return (
    <>
      <p className="read-the-docs">
        <SearchCasesInput
          caseListForSelect={state.caseListForSelect}
          selectCases={selectCases}
          selectedCases={state.selectedCases}
          loadMoreCases={loadMoreCases}
          searchCases={searchCases}
        />
      </p>
    </>
  )
}

export default Single;
