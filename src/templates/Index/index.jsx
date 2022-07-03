import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useLogin from "../../hooks/useLogin";

import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineClose } from "react-icons/md";
import Modal from "react-modal";

import axios from "axios";

import "./styles.css";
import { Input } from "../../components/FormLogin/Input";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Index() {
  const { authenticated, user } = useLogin();

  const [userToUpdate, setUserToUpdate] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    createdAt: "",
    updatedAt: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalDeleteIsOpen, setmodalDeleteIsOpen] = useState(false);

  const [idToDelete, setIdToDelete] = useState("");

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [singleSearch, setSingleSearch] = useState([]);

  function openModal(user) {
    setIsOpen(true);

    setUserToUpdate((prevState) => ({
      ...prevState,
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }

  function openDeleteModal(id) {
    setmodalDeleteIsOpen(true);
    setIdToDelete(id);
  }
  function closeDeleteModal() {
    setmodalDeleteIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
  }

  let navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await axios.get("clientes", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      setData(response.data[0]);
    }
    getData();
  }, [data]);

  async function submitSingleHandler(e) {
    e.preventDefault();
    document.getElementById("check").checked = true;
    try {
      const response = await axios.get(`clientes/${search}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      setSingleSearch(response.data);
      setSearch('')
    } catch (error) {}
  }
  async function updated(e) {
    e.preventDefault();

    const response = await axios.put(
      `clientes/${userToUpdate.id}`,
      userToUpdate,
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(response);
    setIsOpen(false);
  }
  async function deleteUser() {
    const response = await axios.delete(`clientes/${idToDelete}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(response);
  }

  if (!authenticated) {
    navigate("/login");
  }

  return (
    <main className="allContainer">
      <input type="checkbox" id="check"></input>
      <label htmlFor="check">
        <p id="cancel">
          <MdOutlineClose />
        </p>
      </label>
      <div className="sidebar">
        <header>Research Result</header>
        <div className="sidebarContent">
          <h3>ID</h3>
          <hr></hr>
          <p>{singleSearch.id}</p>
          <h3>Name</h3>
          <hr></hr>
          <p>{singleSearch.name}</p>
          <h3>Email</h3>
          <hr></hr>
          <p>{singleSearch.email}</p>
          <h3>Mobile</h3>
          <hr></hr>
          <p>{singleSearch.mobile}</p>
          <h3>Create At</h3>
          <hr></hr>
          <p>{singleSearch.createdAt}</p>
          <h3>Updated At</h3>
          <hr></hr>
          <p>{singleSearch.updatedAt}</p>
        </div>
      </div>
      <section className="containerIndex">
        <main className="informationSliter">
          <h1>Client List - {user.user}</h1>
          <hr></hr>
          <div>
            <div className="searchBar">
              <form onSubmit={submitSingleHandler}>
                <Input
                  id={"singleSearch"}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type={"text"}
                  placeholder={"Set your research by id"}
                />
                <button className="btnIndex">
                  <FaSearch />
                </button>
              </form>
            <div>
              <p>Foram encontrados: 03 de 03 clientes</p>
            </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.createdAt}</td>
                      <td>{user.updatedAt}</td>
                      <td>
                        <button
                          onClick={() => openModal(user)}
                          className="btnIndex btnIndexUp"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btnIndex btnIndexDel"
                          onClick={() => openDeleteModal(user.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2>Updated Client</h2>

                  <hr></hr>
                  <div>Name: </div>
                  <form className="modalContainer" onSubmit={updated}>
                    <Input
                      type="name"
                      id="name"
                      value={userToUpdate.name}
                      placeholder="Type your name"
                      onChange={(e) =>
                        setUserToUpdate((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }))
                      }
                    />
                    <div>Email: </div>
                    <Input
                      type="email"
                      id="email"
                      value={userToUpdate.email}
                      placeholder="Type your email"
                      onChange={(e) =>
                        setUserToUpdate((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                    />
                    <div>Mobile: </div>
                    <Input
                      type="mobile"
                      id="mobile"
                      value={userToUpdate.mobile}
                      placeholder="Type your mobile"
                      onChange={(e) =>
                        setUserToUpdate((prevState) => ({
                          ...prevState,
                          mobile: e.target.value,
                        }))
                      }
                    />
                    <div>
                      <button className="btnIndex btnIndexUp">Update!</button>
                      <button className="btnIndex" onClick={closeModal}>
                        Back
                      </button>
                    </div>
                  </form>
                </Modal>
                <Modal
                  isOpen={modalDeleteIsOpen}
                  onRequestClose={closeDeleteModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2>Updated Client</h2>

                  <hr></hr>
                  <div>Are you sure to delete the data: ? </div>
                  <div>
                    <button
                      className="btnIndex btnIndexUp"
                      onClick={deleteUser}
                    >
                      Delete!
                    </button>
                    <button className="btnIndex" onClick={closeDeleteModal}>
                      Back
                    </button>
                  </div>
                </Modal>
              </tbody>
            </table>
          </div>
        </main>
      </section>

      {search ? (
        <footer className="lowerTable">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr key={singleSearch.id}>
                  <td>{singleSearch.id}</td>
                  <td>{singleSearch.name}</td>
                  <td>{singleSearch.email}</td>
                  <td>{singleSearch.mobile}</td>
                  <td>{singleSearch.createdAt}</td>
                  <td>{singleSearch.updatedAt}</td>
                </tr>
              }
            </tbody>
          </table>
        </footer>
      ) : (
        ""
      )}
    </main>
  );
}

export default Index;
