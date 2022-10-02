import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, deleteTag, getTag } from "../../Redux/tag/action";
import styles from "./taglist.module.css";
import TagShowBox from "./TagListBox";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export const Taglist = () => {
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  console.log(tag);
  const { tagData } = useSelector((store) => store.TagReducer);
  console.log("tagData", tagData);

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleTagSubmit = (e) => {
    if (tag) {
      const payload = {
        name: tag,
      };
      console.log("payload", payload);
      dispatch(addTag(payload)).then(() => dispatch(getTag()));
    }
  };

  useEffect(() => {
    if (tagData.length === 0) {
      dispatch(getTag());
    }
  }, [tagData.length]);

  return (
    <div>
      <div style={{ display: "flex" }} className="tag">
        <input
          className={styles.intput_div}
          placeholder="New list name"
          type="text"
          name=""
          id=""
          onChange={handleChange}
        />
        <div>
          <button onClick={handleTagSubmit} className={styles.addlistbtn}>
            Add
          </button>
        </div>
        <div>
          <button className={styles.cancelbtn}>Cancel</button>
        </div>
      </div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>TITLE</Th>

              {/* <Th>EDIT TODO</Th> */}

              <Th>DELETE TAG </Th>
            </Tr>
          </Thead>
          <tbody>
            {tagData?.map((el) => (
              <tr key={el._id}>
                <td>{el.name}</td>
                {/* <td onClick={()=}>
                  <FaEdit />
                </td> */}
                <td>
                  <Button
                    onClick={() =>
                      dispatch(deleteTag(el._id)).then(() => dispatch(getTag()))
                    }
                  >
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
