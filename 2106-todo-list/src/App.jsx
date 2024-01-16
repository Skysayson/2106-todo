import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import "./App.css";
import bgImage from "./assets/todolistbg.jpg"

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
  },
  {
    key: "2",
    name: "Zoey Lang",
  },
  {
    key: "3",
    name: "Jane Fisher",
  },
  {
    key: "4",
    name: "William Howard",
  },
];

const columns = [
  {
    key: "name",
    label: "TO DO",
  },
  {
    key: "status", // Corrected key to match the condition below
    label: "ACTION",
  },
];

function App() {
  const [todo, AddTodo] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="hero-div flex-col w-screen h-screen flex justify-center items-center z-10">

      <img className="flex w-screen h-screen absolute " src={bgImage}/>

      <Table className="w-[50%] flex">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "status" ? ( // Corrected condition to match the key
                    <div className="flex w-[3rem] justify-evenly">
                      <Button
                        color="warning"
                        variant="solid"
                        className="mr-[2rem]"
                      >
                        Edit
                      </Button>

                      <Button color="danger" variant="solid">
                        Delete
                      </Button>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <form action="POST" className="CRUD mt-[2rem]">
        <Button color="primary" variant="solid" onPress={onOpen}>
          Add todo
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Todo
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    type="text"
                    label="Todo"
                    className="w-[100%]"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </div>
  );
}

export default App;
